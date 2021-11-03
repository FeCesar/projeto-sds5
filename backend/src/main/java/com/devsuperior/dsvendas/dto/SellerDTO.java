package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;

    public SellerDTO(){}

    public SellerDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public SellerDTO(Seller seller) {
        this.id = seller.getId();
        this.nome = seller.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
