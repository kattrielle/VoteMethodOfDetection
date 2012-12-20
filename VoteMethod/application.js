/**
 * Исполняемый файл приложения
 */

jQuery(document).ready(function() {

    //Генерируем форму
    $.each(allParams, function(property, clientParam) {
        var out = '';
        out = out + '<label class="checkbox" for="' + property + '">' + clientParam;
        out = out + '<input type="checkbox" id="' + property + '" name="' + property + '" placeholder="' + clientParam + '">';
        out = out + '</label>';

        $('form fieldset legend').after(out);
    });

    dataGenarate();


    //Сам метод голосования
    $('.btn-primary').click(function() {

        try{
            var clientInfo = {};
            //Сначала приводим параметры тестируемого клиента в объект
            $.each(allParams, function(property, clientParam) {
                clientInfo[property] = $('#' + property).is(':checked');
            });

            var votes = {
                'bad': 0,
                'good': 0
            };

            //Цикл по всем типам клиентов (плохой, хороший)
            $.each(clientTypes, function(clientTypeIndex, clientType) {
                //Пробегаемся по всем примерам типа
                $.each(clientType, function(index, clientTypeExample) {
                    //Теперь цикл по всем группам
                    $.each(paramGroups, function(key, param) {
                        if (compareGroups(clientTypeExample, clientInfo, param)) {
                            votes[clientTypeIndex] += 1;
                        }
                    });
                });
            });

            var text = '';
            //Показываем popup с ответом
            if (votes.good > votes.bad) {
                text = 'Платёжеспособный клиент =)';
            } else if (votes.good < votes.bad) {
                text = 'Неплатёжеспособный клиент =(';
            } else {
                text = 'Голоса одинаковы, нужны дополнительные проверки';
            }

            $('.modal-body p').text(text);
            $('.modal-body .icon-thumbs-up').parent().find('span').text(votes.good);
            $('.modal-body .icon-thumbs-down').parent().find('span').text(votes.bad);

            $('.modal').modal();

        } catch (exception) {
            console.log(exception);
        }




        return false;
    });
});

//Сравниваем 2 группы
function compareGroups(group1, group2, compareOptions) {
    
    var eqCount = 0;

    //Считаем количество одинаковых компонент
    $.each(compareOptions, function(index, compareOption) {
        if (group1[compareOption] == group2[compareOption]) {
            eqCount++;
        }
    });
    
    //Если допустимо одно различие
    if ($('#allowonemistake').hasClass('active')) {
        return (compareOptions.length <= eqCount + 1);
    } else {
        return (compareOptions.length == eqCount);
    }
}

//Генерируем данные
function dataGenarate() {

    //Заголовок таблицы
    var out = '<thead><tr>';
    out = out + '<th>Статус клиента</th>';
    $.each(allParams, function(propery, clientParam) {
        out = out + '<th>' + clientParam + '</th>';
    });

    out = out + '</thead></tr>';
    out = out + '<tbody>';

    $.each(clientTypes.good, function(item, clientInfo) {
        out = out + '<tr class="success">';
        out = out + '<td>Платёжеспособный</td>';
        $.each(clientInfo, function(item, infoItem) {
            out = out + '<td>' + infoItem + '</td>';
        });
        out = out + '</tr>';
    });

    $.each(clientTypes.bad, function(item, clientInfo) {
        out = out + '<tr class="error">';
        out = out + '<td>Неплатёжеспособный</td>';
        $.each(clientInfo, function(item, infoItem) {
            out = out + '<td>' + infoItem + '</td>';
        });
        out = out + '</tr>';
    });

    out = out + '</tbody>';
    $('table').append(out);
}