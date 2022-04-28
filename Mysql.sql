DROP TABLE IF EXISTS messages;

CREATE TABLE `messages` (                               
  `id` INT(11) NOT NULL AUTO_INCREMENT,                 
  `text` VARCHAR(128) COLLATE utf8_bin NOT NULL DEFAULT '',                          
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin; 

select * from messages 

select * from messages m;

commit;  