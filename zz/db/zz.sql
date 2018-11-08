SET NAMES UTF8;
DROP DATABASE IF EXISTS zz;
CREATE DATABASE zz CHARSET=UTF8;
USE zz;
CREATE TABLE zz_week(
    pid INT(8) PRIMARY KEY AUTO_INCREMENT,
    mon INT(8) NOT NULL,
    week VARCHAR(48) NOT NULL,
    weekIndex VARCHAR(128) DEFAULT NULL,
    weekShow1 VARCHAR(128) DEFAULT NULL,
    weekShow2 VARCHAR(128) DEFAULT NULL,
    weekShow3 VARCHAR(128) DEFAULT NULL,
    weekShow4 VARCHAR(128) DEFAULT NULL
);
INSERT INTO zz_week VALUES(null,3,"一","imgs/index/week-6-4-index.png","imgs/week/week-6-4-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,3,"二","imgs/index/week-5-3-index.png","imgs/week/week-5-3-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,3,"三","imgs/index/week-6-1-index.png","imgs/week/week-6-1-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,3,"四","imgs/index/week-6-4-index.png","imgs/week/week-6-4-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,4,"一","imgs/index/week-5-3-index.png","imgs/week/week-5-3-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,4,"二","imgs/index/week-6-1-index.png","imgs/week/week-6-1-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,4,"三","imgs/index/week-6-4-index.png","imgs/week/week-6-4-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,4,"四","imgs/index/week-5-3-index.png","imgs/week/week-5-3-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,5,"一","imgs/index/week-6-1-index.png","imgs/week/week-6-1-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,5,"二","imgs/index/week-6-4-index.png","imgs/week/week-6-4-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,5,"三","imgs/index/week-5-3-index.png","imgs/week/week-5-3-1.png","imgs/week/week-5-3-2.png","imgs/week/week-5-3-3.png","imgs/week/week-5-3-4.png");
INSERT INTO zz_week VALUES(null,5,"四","imgs/index/week-5-4-index.png","imgs/week/week-5-4-1.png","imgs/week/week-5-4-2.png","imgs/week/week-5-4-3.png","imgs/week/week-5-4-4.png");
INSERT INTO zz_week VALUES(null,6,"一","imgs/index/week-6-1-index.png","imgs/week/week-6-1-1.png","imgs/week/week-6-1-2.png","imgs/week/week-6-1-3.png","imgs/week/week-6-1-4.png");
INSERT INTO zz_week VALUES(null,6,"二","imgs/index/week-6-2-index.png","imgs/week/week-6-2-1.png","imgs/week/week-6-2-2.png","imgs/week/week-6-2-3.png","imgs/week/week-6-2-4.png");
INSERT INTO zz_week VALUES(null,6,"三","imgs/index/week-6-3-index.png","imgs/week/week-6-3-1.png","imgs/week/week-6-3-2.png","imgs/week/week-6-3-3.png","imgs/week/week-6-3-4.png");
INSERT INTO zz_week VALUES(null,6,"四","imgs/index/week-6-4-index.png","imgs/week/week-6-4-1.png","imgs/week/week-6-4-2.png","imgs/week/week-6-4-3.png","imgs/week/week-6-4-4.png");
CREATE TABLE user(
    uid INT(8) PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64) DEFAULT NULL,
    suit VARCHAR(64) DEFAULT NULL,
    tel VARCHAR(64) NOT NULL,
    uname VARCHAR(48) DEFAULT NULL
);
CREATE TABLE zz_outer(
    oid INT(8) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64) NOT NULL,
    outerIndex VARCHAR(128) DEFAULT NULL,
    outerShow1 VARCHAR(128) DEFAULT NULL,
    outerShow2 VARCHAR(128) DEFAULT NULL,
    outerShow3 VARCHAR(128) DEFAULT NULL
);
INSERT INTO zz_outer VALUES(null,"幸福生活","imgs/index/outer-5-index.png","imgs/outer/outer-5-1.png","imgs/outer/outer-5-2.png","imgs/outer/outer-5-3.png");
INSERT INTO zz_outer VALUES(null,"清平乐","imgs/index/outer-2-index.png","imgs/outer/outer-2-1.png","imgs/outer/outer-2-2.png","imgs/outer/outer-2-3.png");
INSERT INTO zz_outer VALUES(null,"悠然自得","imgs/index/outer-8-index.png","imgs/outer/outer-8-1.png","imgs/outer/outer-8-2.png","imgs/outer/outer-8-3.png");
INSERT INTO zz_outer VALUES(null,"幽兰小调","imgs/index/outer-1-index.png","imgs/outer/outer-1-1.png","imgs/outer/outer-1-2.png","imgs/outer/outer-1-3.png");
INSERT INTO zz_outer VALUES(null,"蓝天白云","imgs/index/outer-7-index.png","imgs/outer/outer-7-1.png","imgs/outer/outer-7-2.png","imgs/outer/outer-7-3.png");
INSERT INTO zz_outer VALUES(null,"海风旅拍","imgs/index/outer-4-index.png","imgs/outer/outer-4-1.png","imgs/outer/outer-4-2.png","imgs/outer/outer-4-3.png");
INSERT INTO zz_outer VALUES(null,"执子之手","imgs/index/outer-3-index.png","imgs/outer/outer-3-1.png","imgs/outer/outer-3-2.png","imgs/outer/outer-3-3.png");
INSERT INTO zz_outer VALUES(null,"夕夏光年","imgs/index/outer-6-index.png","imgs/outer/outer-6-1.png","imgs/outer/outer-6-2.png","imgs/outer/outer-6-3.png");
INSERT INTO zz_outer VALUES(null,"蓝色时光","imgs/index/outer-1-index.png","imgs/outer/outer-1-1.png","imgs/outer/outer-1-2.png","imgs/outer/outer-1-3.png");
INSERT INTO zz_outer VALUES(null,"浪漫到海","imgs/index/outer-2-index.png","imgs/outer/outer-2-1.png","imgs/outer/outer-2-2.png","imgs/outer/outer-2-3.png");
INSERT INTO zz_outer VALUES(null,"爱的仪式","imgs/index/outer-3-index.png","imgs/outer/outer-3-1.png","imgs/outer/outer-3-2.png","imgs/outer/outer-3-3.png");
INSERT INTO zz_outer VALUES(null,"糖色温馨","imgs/index/outer-4-index.png","imgs/outer/outer-4-1.png","imgs/outer/outer-4-2.png","imgs/outer/outer-4-3.png");
INSERT INTO zz_outer VALUES(null,"一生一世","imgs/index/outer-5-index.png","imgs/outer/outer-5-1.png","imgs/outer/outer-5-2.png","imgs/outer/outer-5-3.png");
INSERT INTO zz_outer VALUES(null,"随心出行","imgs/index/outer-6-index.png","imgs/outer/outer-6-1.png","imgs/outer/outer-6-2.png","imgs/outer/outer-6-3.png");
INSERT INTO zz_outer VALUES(null,"那些花儿","imgs/index/banner-logo-2.png","imgs/outer/outer-7-1.png","imgs/outer/outer-7-2.png","imgs/outer/outer-7-3.png");
INSERT INTO zz_outer VALUES(null,"轻舟故事","imgs/index/outer-8-index.png","imgs/outer/outer-8-1.png","imgs/outer/outer-8-2.png","imgs/outer/outer-8-3.png");
INSERT INTO zz_outer VALUES(null,"浪漫到海","imgs/index/outer-2-index.png","imgs/outer/outer-3-1.png","imgs/outer/outer-3-2.png","imgs/outer/outer-3-3.png");
