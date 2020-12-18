// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const playerId = form.elements.query.value;
//     console.log(playerId);

//     axios.get(`https://cricapi.com/api/playerStats?pid=${playerId}&apikey=X6sFEeyufChRsJ46VxB9mzzrdpk2`)
//     .then(res => {
//         resultData(res.data);
        
//     })
//     .catch(error => {
//         console.log("ERROR!!!!!", error)
//     })
// });



jQuery(function () { 
    $('form').on('submit', function(event) {
    event.preventDefault();

    let endpoint = 'https://cricapi.com/api/playerStats'
    let apikey = 'X6sFEeyufChRsJ46VxB9mzzrdpk2'
    const inputData = $('.search-input').val();

    $.ajax({
        url: `${endpoint}?pid=${inputData}&apikey=${apikey}`,
        contentType: "application/json",
        dataType:'json',
        success: function(result) {
            responseData(result);
        }
       
    })

    function responseData(result) {
        $('.data-heading').text('Player Details');
        $('#player-img').attr('src', `${result.imageURL}`);
        $('#player-name').text(`${result.name}`);

        let title = Object.keys(result);
        console.log(title);
        let tr = $('tr');
        let table1 = $('.main-detail');
            table1.append(`<tr><td>Plays for</td><td>${result.country}</td></tr>`);
            table1.append(`<tr><td>Age</td><td>${result.currentAge}</td></tr>`);
            table1.append(`<tr><td>Born</td><td>${result.born}</td></tr>`);
            table1.append(`<tr><td>Batting Style</td><td>${result.battingStyle}</td></tr>`);
            table1.append(`<tr><td>Bowling Style</td><td>${result.bowlingStyle}</td></tr>`);
    
        let table2 = $('.main-second-detail');

        console.log();
        table2.append(`<tr><td>Major Teams Affiliated with</td><td>${result.majorTeams}</td></tr>`);


//=========BATTING TABLE=========
        let table3 = $('.batting');
        table3.append(`<tr>
                <td>League</td>
                <td>50</td>
                <td>100</td>
                <td>St</td>
                <td>Ct</td>
                <td>6s</td>
                <td>4s</td>
                <td>Ave</td>
                <td>Hs</td>
                <td>Runs</td>
                <td>NO</td>
                <td>Inns</td>
                <td>Mat</td>
                </tr>`);

    let batting_listA = Object.values(result.data.batting.listA);
        table3.append(`<tr>
                <td>ListA</td>
                <td>${batting_listA[0]}</td>
                <td>${batting_listA[1]}</td>
                <td>${batting_listA[2]}</td>
                <td>${batting_listA[3]}</td>
                <td>${batting_listA[4]}</td>
                <td>${batting_listA[5]}</td>
                <td>${batting_listA[6]}</td>
                <td>${batting_listA[7]}</td>
                <td>${batting_listA[8]}</td>
                <td>${batting_listA[9]}</td>
                <td>${batting_listA[10]}</td>
                <td>${batting_listA[11]}</td>
                </tr>`);
    let batting_firstClass = Object.values(result.data.batting.firstClass)
        table3.append(`<tr>
                <td>First Class</td>
                <td>${batting_firstClass[0]}</td>
                <td>${batting_firstClass[1]}</td>
                <td>${batting_firstClass[2]}</td>
                <td>${batting_firstClass[3]}</td>
                <td>${batting_firstClass[4]}</td>
                <td>${batting_firstClass[5]}</td>
                <td>${batting_firstClass[6]}</td>
                <td>${batting_firstClass[7]}</td>
                <td>${batting_firstClass[8]}</td>
                <td>${batting_firstClass[9]}</td>
                <td>${batting_firstClass[10]}</td>
                <td>${batting_firstClass[11]}</td>
                </tr>`);
    let batting_T20Is = Object.values(result.data.batting.T20Is)
        table3.append(`<tr>
                <td>T20Is</td>
                <td>${batting_T20Is[0]}</td>
                <td>${batting_T20Is[1]}</td>
                <td>${batting_T20Is[2]}</td>
                <td>${batting_T20Is[3]}</td>
                <td>${batting_T20Is[4]}</td>
                <td>${batting_T20Is[5]}</td>
                <td>${batting_T20Is[6]}</td>
                <td>${batting_T20Is[7]}</td>
                <td>${batting_T20Is[8]}</td>
                <td>${batting_T20Is[9]}</td>
                <td>${batting_T20Is[10]}</td>
                <td>${batting_T20Is[11]}</td>
                </tr>`);
    let batting_ODIs = Object.values(result.data.batting.ODIs)
        table3.append(`<tr>
                <td>ODIs</td>
                <td>${batting_ODIs[0]}</td>
                <td>${batting_ODIs[1]}</td>
                <td>${batting_ODIs[2]}</td>
                <td>${batting_ODIs[3]}</td>
                <td>${batting_ODIs[4]}</td>
                <td>${batting_ODIs[5]}</td>
                <td>${batting_ODIs[6]}</td>
                <td>${batting_ODIs[7]}</td>
                <td>${batting_ODIs[8]}</td>
                <td>${batting_ODIs[9]}</td>
                <td>${batting_ODIs[10]}</td>
                <td>${batting_ODIs[11]}</td>
                </tr>`);
    let batting_tests = Object.values(result.data.batting.tests)
        table3.append(`<tr>
                <td>Tests</td>
                <td>${batting_tests[0]}</td>
                <td>${batting_tests[1]}</td>
                <td>${batting_tests[2]}</td>
                <td>${batting_tests[3]}</td>
                <td>${batting_tests[4]}</td>
                <td>${batting_tests[5]}</td>
                <td>${batting_tests[6]}</td>
                <td>${batting_tests[7]}</td>
                <td>${batting_tests[8]}</td>
                <td>${batting_tests[9]}</td>
                <td>${batting_tests[10]}</td>
                <td>${batting_tests[11]}</td>
                </tr>`);
//=========BOWLING TABLE=========
            let table4 = $('.bowling');
            table4.append(`<tr>
                    <td>League</td>
                    <td>50</td>
                    <td>100</td>
                    <td>St</td>
                    <td>Ct</td>
                    <td>6s</td>
                    <td>4s</td>
                    <td>Ave</td>
                    <td>Hs</td>
                    <td>Runs</td>
                    <td>NO</td>
                    <td>Inns</td>
                    <td>Mat</td>
                    </tr>`);

            let bowling_listA = Object.values(result.data.bowling.listA);
            table4.append(`<tr>
                    <td>ListA</td>
                    <td>${bowling_listA[0]}</td>
                    <td>${bowling_listA[1]}</td>
                    <td>${bowling_listA[2]}</td>
                    <td>${bowling_listA[3]}</td>
                    <td>${bowling_listA[4]}</td>
                    <td>${bowling_listA[5]}</td>
                    <td>${bowling_listA[6]}</td>
                    <td>${bowling_listA[7]}</td>
                    <td>${bowling_listA[8]}</td>
                    <td>${bowling_listA[9]}</td>
                    <td>${bowling_listA[10]}</td>
                    <td>${bowling_listA[11]}</td>
                    </tr>`);
            let bowling_firstClass = Object.values(result.data.bowling.firstClass)
            table4.append(`<tr>
                    <td>First Class</td>
                    <td>${bowling_firstClass[0]}</td>
                    <td>${bowling_firstClass[1]}</td>
                    <td>${bowling_firstClass[2]}</td>
                    <td>${bowling_firstClass[3]}</td>
                    <td>${bowling_firstClass[4]}</td>
                    <td>${bowling_firstClass[5]}</td>
                    <td>${bowling_firstClass[6]}</td>
                    <td>${bowling_firstClass[7]}</td>
                    <td>${bowling_firstClass[8]}</td>
                    <td>${bowling_firstClass[9]}</td>
                    <td>${bowling_firstClass[10]}</td>
                    <td>${bowling_firstClass[11]}</td>
                    </tr>`);
            let bowling_T20Is = Object.values(result.data.bowling.T20Is)
            table4.append(`<tr>
                    <td>T20Is</td>
                    <td>${bowling_T20Is[0]}</td>
                    <td>${bowling_T20Is[1]}</td>
                    <td>${bowling_T20Is[2]}</td>
                    <td>${bowling_T20Is[3]}</td>
                    <td>${bowling_T20Is[4]}</td>
                    <td>${bowling_T20Is[5]}</td>
                    <td>${bowling_T20Is[6]}</td>
                    <td>${bowling_T20Is[7]}</td>
                    <td>${bowling_T20Is[8]}</td>
                    <td>${bowling_T20Is[9]}</td>
                    <td>${bowling_T20Is[10]}</td>
                    <td>${bowling_T20Is[11]}</td>
                    </tr>`);
            let bowling_ODIs = Object.values(result.data.bowling.ODIs)
            table4.append(`<tr>
                    <td>ODIs</td>
                    <td>${bowling_ODIs[0]}</td>
                    <td>${bowling_ODIs[1]}</td>
                    <td>${bowling_ODIs[2]}</td>
                    <td>${bowling_ODIs[3]}</td>
                    <td>${bowling_ODIs[4]}</td>
                    <td>${bowling_ODIs[5]}</td>
                    <td>${bowling_ODIs[6]}</td>
                    <td>${bowling_ODIs[7]}</td>
                    <td>${bowling_ODIs[8]}</td>
                    <td>${bowling_ODIs[9]}</td>
                    <td>${bowling_ODIs[10]}</td>
                    <td>${bowling_ODIs[11]}</td>
                    </tr>`);
            let bowling_tests = Object.values(result.data.bowling.tests)
            table4.append(`<tr>
                    <td>Tests</td>
                    <td>${bowling_tests[0]}</td>
                    <td>${bowling_tests[1]}</td>
                    <td>${bowling_tests[2]}</td>
                    <td>${bowling_tests[3]}</td>
                    <td>${bowling_tests[4]}</td>
                    <td>${bowling_tests[5]}</td>
                    <td>${bowling_tests[6]}</td>
                    <td>${bowling_tests[7]}</td>
                    <td>${bowling_tests[8]}</td>
                    <td>${bowling_tests[9]}</td>
                    <td>${bowling_tests[10]}</td>
                    <td>${bowling_tests[11]}</td>
                    </tr>`);




        // $('.min-details').first().text(`${title[7]}`)
        // $('.min-details').eq(1).text(`${result.currentAge}`)
        console.log(result)

       
    }
    

    });


   















    
});