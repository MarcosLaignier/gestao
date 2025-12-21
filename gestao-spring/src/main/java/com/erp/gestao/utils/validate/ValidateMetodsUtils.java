package com.erp.gestao.utils.validate;

import com.erp.gestao.utils.CollectionMetodsUtils;
import org.hibernate.service.spi.ServiceException;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class ValidateMetodsUtils {

    /** Metodo responsavel por validar os fields anotados com @ValidadeField
     * para nao serem null ou vazios e retornar a mensagem de erro
     *
     * @param entity
     * @param <T>
     */
    public static <T> void validateFieldsNonNull(T entity){
        Field[] declaredFields = entity.getClass().getDeclaredFields();
        List<String> errorMessages = new ArrayList<>();
        for(Field field : declaredFields){
            // Verificando se o campo é anotado com a anotacao @ValidateField
            if(field.isAnnotationPresent(ValidateField.class)){
                field.setAccessible(true); // Setando como acessivel pois os campos sao private

                Object value = null;
                try {
                    // Reflection para acessar o campo
                    value = field.get(entity);
                } catch (IllegalAccessException e) {
                    throw new RuntimeException("Erro para acessar o campo" + field, e);
                }
                // String esta sendo testado separadamente para caso seja null ou vazia
                if(value instanceof String){
                    if(CollectionMetodsUtils.isStringEmpty((String) value)){
                        messageErrorValidadeFields(field,errorMessages);
                    }
                }else{
                    if(value == null){
                        messageErrorValidadeFields(field,errorMessages);
                    }
                }
            }
        }

        if(!CollectionMetodsUtils.isEmpty(errorMessages)){
            throw new ApplicationException(errorMessages);
        }

    }

    /** Metodo responsavel por acessar o Field e verificar se tem mensagem
     * Caso nao tenha a mensagem padrao é retornada
     *
     * @param field
     */
    private static void messageErrorValidadeFields(Field field, List<String> errorMessages) {
        String messageCampo = field.getAnnotation(ValidateField.class).message();
        field.setAccessible(true);

        if(!CollectionMetodsUtils.isStringEmpty(messageCampo)){
            errorMessages.add(messageCampo);
        }else{
            errorMessages.add("O campo " + field.getName() + " devera ser informado!");
        }
    }


}
