USE FörstaDatabasen
GO

--Ursprunglig table loginmanager
SELECT * FROM loginmanager

/*KATA use table*/
--Finns användaren i databasen visas namnet och lösenordet från tabellen
--Sebastian1 och password är inputs
--BONUS där DATEDIFF kollar om registreringsdatumet minus nuvarande datum är negativt och om lösenordet få är för gammalt
SELECT namn, lösenord FROM loginmanager
WHERE namn = 'Sebastian1' AND lösenord ='password' AND DATEDIFF(DAY, DATEADD(YEAR, 1, registrDatum), CURRENT_TIMESTAMP) < 0

/*KATA update record*/
--Ändrar namn på en given rad (WHERE namn=[namn-variabeln för raden som ska ändras])
--GoodP4$$, och User är inputs
--BONUS lösenordet och användarnamnet bytas bara om det gamla lösenordet stämde, !Pass12345 är input
UPDATE loginmanager
SET lösenord = 'GoodP4$$', registrdatum = CURRENT_TIMESTAMP
WHERE namn = 'User' AND lösenord = '!Pass12345'

SELECT namn, lösenord FROM loginmanager

/*KATA update record*/
--Raderar en användare på rad där namn = 'BetterUser'
DELETE FROM loginmanager
WHERE namn = 'User'

SELECT namn, lösenord FROM loginmanager

--Testkodande
SELECT DATEADD(YEAR, 1, CAST(CAST(registrDatum AS DATE) AS DATETIME)) FROM loginmanager

SELECT DATEDIFF(DAY, DATEADD(YEAR, 1, registrDatum), CURRENT_TIMESTAMP) FROM loginmanager
