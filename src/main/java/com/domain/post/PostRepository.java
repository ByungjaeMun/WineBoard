package com.domain.post;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.domain.type.ContentType;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	public List<Post> findByContentType(ContentType contentType);
}
