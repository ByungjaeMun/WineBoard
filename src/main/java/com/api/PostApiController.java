package com.api;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.domain.exception.ResourceNotFoundException;
import com.domain.post.Post;
import com.domain.post.PostRepository;
import com.domain.type.ContentType;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Api(value = "post", description = "Post API Controller")
public class PostApiController implements ApiController {
	private final PostRepository repository;

	@GetMapping("/posts")
	public List<Post> getPosts() {
		return repository.findAll();
	}

	@GetMapping("/posts/photos")
	public List<Post> getPostsOfPhotos() {
		return repository.findByContentType(ContentType.PHOTO);
	}

	@GetMapping("/posts/videos")
	public List<Post> getPostsOfVideos() {
		return repository.findByContentType(ContentType.VIDEO);
	}

	@GetMapping("/posts/{id}")
	public Post getPostById(@PathVariable Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Note", "id", id));
	}

	@PostMapping("/posts")
	public Post addPost(@RequestBody Post newPost) {
		return repository.save(newPost);
	}

	@PatchMapping("/posts/{id}")
	public Post modifyPost(@RequestBody Post newPost, @PathVariable Long id) {
		return repository.findById(id)
				.map(post -> {
					post.setTitle(newPost.getTitle());
					post.setDescription(newPost.getDescription());
					post.setContentType(newPost.getContentType());
					return repository.save(post);
				})
				.orElseGet(() -> {
					newPost.setId(id);
					return repository.save(newPost);
				});
	}

	@DeleteMapping("/posts/{id}")
	public void deletePost(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
