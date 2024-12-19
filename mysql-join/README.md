### Selezionare tutti i corsi del Corso di Laurea in Informatica (22)

```SQL
SELECT `courses`.*, `degrees`.`name` AS `degree_name`
FROM `courses`
JOIN `degrees`
ON `degrees`.`id` = `courses`.`degree_id`
WHERE `degrees`.`name` = 'Corso di Laurea in Informatica'
```

### Selezionare le informazioni sul corso con id = 144, con tutti i relativi appelli d’esame

```SQL
SELECT `c`.*, `e`.`id` AS `exam_id`, `e`.`date`,`e`.`hour`, `e`.`location`,`e`.`address`
FROM `courses` AS `c`
JOIN `exams` AS `e`
ON `c`.`id` = `e`.`course_id`
WHERE `c`.`id` = 144
```

### Selezionare a quale dipartimento appartiene il Corso di Laurea in Diritto dell'Economia (Dipartimento di Scienze politiche, giuridiche e studi internazionali)

```SQL
SELECT `d`.*, `dep`.`name` AS `department_name`
FROM `degrees` AS `d`
JOIN `departments` AS `dep`
ON `d`.`department_id` = `dep`.`id`
WHERE `d`.`name` = 'Corso di Laurea in Diritto dell\'Economia'
```

### Selezionare tutti gli appelli d'esame del Corso di Laurea Magistrale in Fisica del primo anno

```SQL
SELECT `d`.`id` AS `degree_id`, `d`.`name` AS `degree_name`, `c`.`id` AS `course_id`, `c`.`name` AS `course_name`,`e`.*
FROM `degrees` AS `d`
JOIN `courses` AS `c`
ON `c`.`degree_id` = `d`.`id`
JOIN `exams` AS `e`
ON `e`.`course_id` = `c`.`id`
WHERE `d`.`name` = 'Corso di Laurea Magistrale in Fisica' AND `c`.`year` = 1
```

### Selezionare tutti i docenti che insegnano nel Corso di Laurea in Lettere (21)

```SQL
SELECT DISTINCT `t`.*
FROM `degrees` AS `d`
JOIN `courses` AS `c`
ON `d`.`id` = `c`.`degree_id`
JOIN `course_teacher` AS `c_t`
ON `c_t`.`course_id` = `c`.`id`
JOIN `teachers` AS `t`
ON `c_t`.`teacher_id` = `t`.`id`
WHERE `d`.`name` = 'Corso di Laurea in Lettere'
```

### Selezionare il libretto universitario di Mirco Messina (matricola n. 620320)

```SQL
SELECT `c`.`name`, `e_s`.`vote`, `e`.`date`
FROM `students` AS `s`
JOIN `exam_student` AS `e_s`
ON `s`.`id` = `e_s`.`student_id`
JOIN `exams` AS `e`
ON `e_s`.`exam_id` = `e`.`id`
JOIN `courses` AS `c`
ON `e`.`course_id` = `c`.`id`
WHERE `s`.`registration_number` = '620320' AND `e_s`.`vote` >= 18
```

### Selezionare il voto medio di superamento d'esame per ogni corso, con anche i dati del corso di laurea associato, ordinati per media voto decrescente

```SQL
SELECT `d`.`name` AS `degree_name`, `c`.`name` AS `course_name`, AVG(`e_s`.`vote`) AS `avg`
FROM `degrees` AS `d`
JOIN `courses` AS `c`
ON `c`.`degree_id` = `d`.`id`
JOIN `exams` AS `e`
ON `e`.`course_id` = `c`.`id`
JOIN `exam_student` AS `e_s`
ON `e_s`.`exam_id` = `e`.`id`
WHERE `e_s`.`vote` >= 18
GROUP BY `c`.`id`
ORDER BY `avg` DESC
```
