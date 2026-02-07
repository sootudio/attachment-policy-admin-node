CREATE TABLE fixed_extension (
  extension VARCHAR(20) PRIMARY KEY,
  blocked   TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE custom_extension (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  extension VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_custom_extension (extension)
);

-- 200개 제한 동시성 보장용 (잠금용 1행)
CREATE TABLE custom_extension_meta (
  id INT PRIMARY KEY
);

INSERT INTO custom_extension_meta (id) VALUES (1)
  ON DUPLICATE KEY UPDATE id = id;

INSERT INTO fixed_extension(extension, blocked) VALUES
('exe',1),('bat',1),('cmd',1),('sh',1),('js',1),('jar',1),
('php',1),('py',1),('rb',1),('pl',1),('dll',1),('msi',1)
ON DUPLICATE KEY UPDATE blocked = blocked;
