package com.e202.dogcatdang.db.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Table(name = "board")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Board {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long boardId;
	private int code;
	private String title;
	private String content;
	private LocalDateTime createTime;

	@Column(columnDefinition = "TINYINT(1)")
	private boolean isSaved;

	@OneToMany(mappedBy = "board")
	private List<BoardImage> imageEntityList = new ArrayList<>();

	//일단 id 저장하고 나중에 userEntity로 바꿔줘야 함.
	private Long userId;

}
