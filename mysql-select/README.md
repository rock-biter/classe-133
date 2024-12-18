### Selezionare tutti gli insegnanti

```SQL
SELECT *
FROM `teachers`
```

### Selezionare tutti i referenti per ogni dipartimento

```SQL
SELECT `name`, `head_of_department`
FROM `departments`
```

### Selezionare tutti gli studenti il cui nome inizia per "E" (373)

```SQL
SELECT *
FROM `students`
WHERE `name` LIKE '%e'
```

### Selezionare tutti gli studenti che si sono iscritti nel 2021 (734)

```SQL
SELECT *
FROM `students`
WHERE `enrolment_date` LIKE '2021-%'
```

```SQL
SELECT *
FROM `students`
WHERE YEAR(`enrolment_date`) = 2021
```

```SQL
SELECT *
FROM `students`
WHERE `enrolment_date` BETWEEN '2021-01-01' AND '2021-12-31'
```

### Selezionare tutti i corsi che non hanno un sito web (676)

```SQL
SELECT *
FROM `courses`
WHERE `website` IS NULL
```

### Selezionare tutti gli insegnanti che hanno un numero di telefono (50)

```SQL
SELECT *
FROM `teachers`
WHERE `phone` IS NOT NULL
```

### Selezionare tutti gli appelli d'esame dei mesi di giugno e luglio 2020 (2634)

```SQL
SELECT *
FROM `exams`
WHERE `date` BETWEEN '2020-06-01' AND '2020-07-31'
```

### Qual è il numero totale degli studenti iscritti? (5000)

```SQL
SELECT COUNT(*) AS `total`
FROM `students`
```
