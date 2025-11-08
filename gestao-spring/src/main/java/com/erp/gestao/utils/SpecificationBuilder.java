package com.erp.gestao.utils;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class SpecificationBuilder<T> implements Specification<T> {

    private final List<Specification<T>> specs = new ArrayList<>();

    public static <T> SpecificationBuilder<T> of(Class<T> clazz) {
        return new SpecificationBuilder<>();
    }

    public SpecificationBuilder<T> equal(String field, Object value) {
        if (value != null) {
            specs.add((root, query, cb) -> cb.equal(root.get(field), value));
        }
        return this;
    }

    public SpecificationBuilder<T> likeIgnoreCase(String field, String value) {
        if (value != null && !value.isEmpty()) {
            specs.add((root, query, cb) ->
                    cb.like(cb.lower(root.get(field)), "%" + value.toLowerCase() + "%")
            );
        }
        return this;
    }

    public SpecificationBuilder<T> in(String field, List<?> values) {
        if (values != null && !values.isEmpty()) {
            specs.add((root, query, cb) -> root.get(field).in(values));
        }
        return this;
    }

// falta fazer um betwen

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<>();
        for (Specification<T> spec : specs) {
            Predicate p = spec.toPredicate(root, query, cb);
            if (p != null) predicates.add(p);
        }
        return predicates.isEmpty() ? cb.conjunction() : cb.and(predicates.toArray(new Predicate[0]));
    }
}

