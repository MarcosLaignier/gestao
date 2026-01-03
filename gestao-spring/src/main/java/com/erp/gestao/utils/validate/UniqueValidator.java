package com.erp.gestao.utils.validate;

import java.lang.reflect.Field;

@FunctionalInterface
public interface UniqueValidator {

    boolean exists(Object entity, Field field, Object value);
}