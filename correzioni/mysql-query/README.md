# GROUP BY

### Contare quanti iscritti ci sono stati ogni anno

```SQL
SELECT COUNT(*) AS `total`, YEAR(`enrolment_date`) AS `year`
FROM `students`
GROUP BY `year`
```

### Contare gli insegnanti che hanno l'ufficio nello stesso edificio

```SQL
SELECT COUNT(*) AS `total`, `office_address`
FROM `teachers`
GROUP BY `office_address`
```

### Calcolare la media dei voti di ogni appello d'esame

```SQL
SELECT AVG(`vote`) AS `avg`, `exam_id`
FROM `exam_student`
GROUP BY `exam_id`
```

### Contare quanti corsi di laurea ci sono per ogni dipartimento

```SQL
SELECT `department_id`, COUNT(*) AS `num_of_degrees`
FROM `degrees`
GROUP BY `department_id`
```

# JOIN

### Selezionare tutti gli studenti iscritti al Corso di Laurea in Economia

```SQL
SELECT `students`.*
FROM `students`
JOIN `degrees`
ON `students`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea in Economia'
```

### 2. Selezionare tutti i Corsi di Laurea Magistrale del Dipartimento di Neuroscienze

```SQL
SELECT `d`.*
FROM `departments` AS `dep`
JOIN `degrees` AS `d`
ON `d`.`department_id` = `dep`.`id`
WHERE `dep`.`name` = 'Dipartimento di Neuroscienze' AND `d`.`level` = 'magistrale'
```

### Selezionare tutti i corsi in cui insegna Fulvio Amato (id=44)

```SQL
SELECT `c`.*
FROM `teachers` AS `t`
JOIN `course_teacher` AS `c_t`
ON `c_t`.`teacher_id` = `t`.`id`
JOIN `courses` AS `c`
ON `c`.`id` = `c_t`.`course_id`
WHERE `t`.`id` = 44
```

### Selezionare tutti gli studenti con i dati relativi al corso di laurea a cui sono iscritti e il relativo dipartimento, in ordine alfabetico per cognome e nome

```SQL
SELECT `s`.*, `d`.`name` AS `degree_name`, `dep`.`name` AS `department_name`
FROM `departments` AS `dep`
JOIN `degrees` AS `d`
ON `d`.`department_id` = `dep`.`id`
JOIN `students` AS `s`
ON `s`.`degree_id` = `d`.`id`
ORDER BY `s`.`surname`, `s`.`name` ASC
```

### Selezionare tutti i corsi di laurea con i relativi corsi e insegnanti

```SQL
SELECT `d`.*, `c`.`name` AS `course_name`, CONCAT(`t`.`name`, ' ' , `t`.`surname` ) AS `teacher_fullname`
FROM `degrees` AS `d`
JOIN `courses` AS `c`
ON `c`.`degree_id` = `d`.`id`
JOIN `course_teacher` AS `c_t`
ON `c_t`.`course_id` = `c`.`id`
JOIN `teachers` AS `t`
ON `c_t`.`teacher_id` = `t`.`id`
```

### Selezionare tutti i docenti che insegnano nel Dipartimento di Matematica (54)

```SQL
SELECT DISTINCT `t`.*
FROM `departments` AS `dep`
JOIN `degrees` AS `d`
ON `dep`.`id` = `d`.`department_id`
JOIN `courses` AS `c`
ON `c`.`degree_id` = `d`.`id`
JOIN `course_teacher` AS `c_t`
ON `c_t`.`course_id` = `c`.`id`
JOIN `teachers` AS `t`
ON `c_t`.`teacher_id` = `t`.`id`
WHERE `dep`.`name` = 'Dipartimento di Matematica'
```

### BONUS: Selezionare per ogni studente il numero di tentativi sostenuti per ogni esame, stampando anche il voto massimo. Successivamente, filtrare i tentativi con voto minimo 18.

```SQL
SELECT `s`.`name`,`s`.`surname`,`s`.`id` AS `student_id`,
`c`.`id` AS `course_id`, COUNT(*) AS `tentativi`,
MAX(`e_s`.`vote`) AS `voto_massimo`
FROM `students` AS `s`
JOIN `exam_student` AS `e_s`
ON `e_s`.`student_id` = `s`.`id`
JOIN `exams` AS `e`
ON `e_s`.`exam_id` = `e`.`id`
JOIN `courses` AS `c`
ON `e`.`course_id` = `c`.`id`
GROUP BY `s`.`id`, `c`.`id`
HAVING `voto_massimo` >= 18
```

### esempio con query annidata

```SQL
SELECT *
FROM (
SELECT `s`.`name`,`s`.`surname`,`s`.`id` AS `student_id`,
`c`.`id` AS `course_id`, COUNT(*) AS `tentativi`,
MAX(`e_s`.`vote`) AS `voto_massimo`
FROM `students` AS `s`
JOIN `exam_student` AS `e_s`
ON `e_s`.`student_id` = `s`.`id`
JOIN `exams` AS `e`
ON `e_s`.`exam_id` = `e`.`id`
JOIN `courses` AS `c`
ON `e`.`course_id` = `c`.`id`
GROUP BY `s`.`id`, `c`.`id`
) AS `tentativi`
WHERE `tentativi`.`voto_massimo` >= 18
```
