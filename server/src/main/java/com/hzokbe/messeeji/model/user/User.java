package com.hzokbe.messeeji.model.user;

import io.quarkus.mongodb.panache.common.MongoEntity;
import org.bson.codecs.pojo.annotations.BsonId;

import java.util.UUID;

@MongoEntity(collection = "user")
public class User {
    @BsonId
    public String id;

    public String username;

    public String passwordHash;

    public User() {
        id = UUID.randomUUID().toString();
    }
}
