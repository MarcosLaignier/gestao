package com.erp.gestao.utils.validate;

import com.erp.gestao.utils.CollectionMetodsUtils;
import org.hibernate.service.spi.ServiceException;

import java.lang.reflect.Field;
public class ValidateMetodsUtils {

    /** Metodo responsavel por validar os fields anotados com @ValidadeField
     * para nao serem null ou vazios e retornar a mensagem de erro
     *
     * @param entity
     * @param <T>
     */
    public static <T> void validateFieldsNonNull(T entity){
        Field[] declaredFields = entity.getClass().getDeclaredFields();

        for(Field field : declaredFields){
            // Verificando se o campo é anotado com a anotacao @ValidateField
            if(field.isAnnotationPresent(ValidateField.class)){
                field.setAccessible(true); // Setando como acessivel pois os campos sao private

                try{
                    //Reflection para acessar o campo
                    Object value = field.get(entity);
                    // String esta sendo testado separadamente para caso seja null ou vazia
                    if(value instanceof String){
                        if(CollectionMetodsUtils.isStringEmpty((String) value)){
                            messageErrorValidadeFields(field);
                        }
                    }else{
                        if(value == null){
                            messageErrorValidadeFields(field);
                        }
                    }
                }catch (Exception e ){
                    throw new RuntimeException("Erro para acessar o campo" + field, e);
                }
            }

        }

    }

    /** Metodo responsavel por acessar o Field e verificar se tem mensagem
     * Caso nao tenha a mensagem padrao é retornada
     *
     * @param field
     */
    private static void messageErrorValidadeFields(Field field){
        String messageCampo = field.getAnnotation(ValidateField.class).message();
        if(!CollectionMetodsUtils.isStringEmpty(messageCampo)){
            throw new ServiceException(messageCampo);
        }else{

            throw new ServiceException("O campo " + field.getName() + " devera ser informado!");
        }
    }


}
