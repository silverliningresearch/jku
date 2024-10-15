let selected_items = [];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function get_selection()
{
  $('.rt-btn.rt-btn-next').hide(); 
  
  let selected_id = [];
  let selected_label = [
    "Hel- eller halvdagstillfällen",
    "Kortkurs, 2- 4 dagar",
    "Program för en vecka eller längre",
    "E-learning, digitala moduler",
    "Mentorskap",
    "Coaching",
    "Utveckling via kollegor, i par",
    "Formella chefs- eller ledarnätverk (interna)",
    "Formella chefs- eller ledarnätverk (externt)",
    "Utvecklingssamtal i syfte att stärka ledarskapsförmåga",
    "Individuella feedbackövningar",
    "Gruppreflektioner (t.ex. After Action Review)",
    "Jobbutmaningar som ett konsekvent tillvägagångssätt",
    "Tillfälliga uppdrag eller projekt",
    "Chefsmöten och chefsforum",
    "Integrerat i befintliga möten",
    "Individuell självutveckling",
    "Team- eller grupputveckling",
    "Förändrings- eller kvalitetsförbättringsarbete"

  ];

  if ((api.fn.answers().Vilka_aktiviteter_1) && (api.fn.answers().Vilka_aktiviteter_1 == 1)) selected_id.push(1);
  if ((api.fn.answers().Vilka_aktiviteter_2) && (api.fn.answers().Vilka_aktiviteter_2 == 1)) selected_id.push(2);
  if ((api.fn.answers().Vilka_aktiviteter_3) && (api.fn.answers().Vilka_aktiviteter_3 == 1)) selected_id.push(3);
  if ((api.fn.answers().Vilka_aktiviteter_4) && (api.fn.answers().Vilka_aktiviteter_4 == 1)) selected_id.push(4);
  if ((api.fn.answers().Vilka_aktiviteter_5) && (api.fn.answers().Vilka_aktiviteter_5 == 1)) selected_id.push(5);
  if ((api.fn.answers().Vilka_aktiviteter_6) && (api.fn.answers().Vilka_aktiviteter_6 == 1)) selected_id.push(6);
  if ((api.fn.answers().Vilka_aktiviteter_7) && (api.fn.answers().Vilka_aktiviteter_7 == 1)) selected_id.push(7);
  if ((api.fn.answers().Vilka_aktiviteter_8) && (api.fn.answers().Vilka_aktiviteter_8 == 1)) selected_id.push(8);
  if ((api.fn.answers().Vilka_aktiviteter_9) && (api.fn.answers().Vilka_aktiviteter_9 == 1)) selected_id.push(9);
  if ((api.fn.answers().Vilka_aktiviteter_10) && (api.fn.answers().Vilka_aktiviteter_10 == 1)) selected_id.push(10);
  if ((api.fn.answers().Vilka_aktiviteter_11) && (api.fn.answers().Vilka_aktiviteter_11 == 1)) selected_id.push(11);
  if ((api.fn.answers().Vilka_aktiviteter_12) && (api.fn.answers().Vilka_aktiviteter_12 == 1)) selected_id.push(12);
  if ((api.fn.answers().Vilka_aktiviteter_13) && (api.fn.answers().Vilka_aktiviteter_13 == 1)) selected_id.push(13);
  if ((api.fn.answers().Vilka_aktiviteter_14) && (api.fn.answers().Vilka_aktiviteter_14 == 1)) selected_id.push(14);
  if ((api.fn.answers().Vilka_aktiviteter_15) && (api.fn.answers().Vilka_aktiviteter_15 == 1)) selected_id.push(15);
  if ((api.fn.answers().Vilka_aktiviteter_16) && (api.fn.answers().Vilka_aktiviteter_16 == 1)) selected_id.push(16);
  if ((api.fn.answers().Vilka_aktiviteter_17) && (api.fn.answers().Vilka_aktiviteter_17 == 1)) selected_id.push(17);
  if ((api.fn.answers().Vilka_aktiviteter_18) && (api.fn.answers().Vilka_aktiviteter_18 == 1)) selected_id.push(18);
  if ((api.fn.answers().Vilka_aktiviteter_19) && (api.fn.answers().Vilka_aktiviteter_19 == 1)) selected_id.push(19);
  if ((api.fn.answers().Vilka_aktiviteter_20) && (api.fn.answers().Vilka_aktiviteter_20 == 1)) selected_id.push(20);


  //var selected_id_random = shuffleArray(selected_id);

  var selected_id_random = selected_id; //dont need to shuffle as there is maximum 3 only.
  
  console.log("selected item: ", selected_id_random); 
  
  if (selected_id_random[0] && selected_id_random[0]>0) {
    api.fn.answers({selected_one:  selected_label[selected_id_random[0]-1]}); //index from 0
  }
  else {
    api.fn.answers({selected_one:  "NA"}); //index from 0
  }

  if (selected_id_random[1] && selected_id_random[1]>0) {
    api.fn.answers({selected_two:  selected_label[selected_id_random[1]-1]});
  }
  else {
    api.fn.answers({selected_two:  "NA"}); //index from 0
  }

  if (selected_id_random[2] && selected_id_random[2]>0) {
    api.fn.answers({selected_three:  selected_label[selected_id_random[2]-1]});
  }
  else {
    api.fn.answers({selected_three:  "NA"}); //index from 0
  }

  $('.rt-btn.rt-btn-next').show(); 
}
