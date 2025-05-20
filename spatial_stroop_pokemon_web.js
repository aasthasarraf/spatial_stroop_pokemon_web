/*********************************** 
 * Spatial_Stroop_Pokemon_Web *
 ***********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'spatial_stroop_pokemon_web';  // from the Builder filename that created this script
let expInfo = {
    'name': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(begin_experimentRoutineBegin());
flowScheduler.add(begin_experimentRoutineEachFrame());
flowScheduler.add(begin_experimentRoutineEnd());
flowScheduler.add(intro_taskRoutineBegin());
flowScheduler.add(intro_taskRoutineEachFrame());
flowScheduler.add(intro_taskRoutineEnd());
flowScheduler.add(instruction_congruentRoutineBegin());
flowScheduler.add(instruction_congruentRoutineEachFrame());
flowScheduler.add(instruction_congruentRoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const trials_loop_congruent_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loop_congruent_practiceLoopBegin(trials_loop_congruent_practiceLoopScheduler));
flowScheduler.add(trials_loop_congruent_practiceLoopScheduler);
flowScheduler.add(trials_loop_congruent_practiceLoopEnd);


flowScheduler.add(instruction_incongruentRoutineBegin());
flowScheduler.add(instruction_incongruentRoutineEachFrame());
flowScheduler.add(instruction_incongruentRoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const trials_loop_incongruent_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loop_incongruent_practiceLoopBegin(trials_loop_incongruent_practiceLoopScheduler));
flowScheduler.add(trials_loop_incongruent_practiceLoopScheduler);
flowScheduler.add(trials_loop_incongruent_practiceLoopEnd);


flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const test_phase_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_phase_loopLoopBegin(test_phase_loopLoopScheduler));
flowScheduler.add(test_phase_loopLoopScheduler);
flowScheduler.add(test_phase_loopLoopEnd);









flowScheduler.add(end_of_experimentRoutineBegin());
flowScheduler.add(end_of_experimentRoutineEachFrame());
flowScheduler.add(end_of_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'list_stim_congruent_practice.xlsx', 'path': 'list_stim_congruent_practice.xlsx'},
    {'name': 'stimuli/1.png', 'path': 'stimuli/1.png'},
    {'name': 'stimuli/5.png', 'path': 'stimuli/5.png'},
    {'name': 'stimuli/7.png', 'path': 'stimuli/7.png'},
    {'name': 'stimuli/9.png', 'path': 'stimuli/9.png'},
    {'name': 'stimuli/14.png', 'path': 'stimuli/14.png'},
    {'name': 'stimuli/15.png', 'path': 'stimuli/15.png'},
    {'name': 'stimuli/19.png', 'path': 'stimuli/19.png'},
    {'name': 'stimuli/20.png', 'path': 'stimuli/20.png'},
    {'name': 'list_stim_incongruent_practice.xlsx', 'path': 'list_stim_incongruent_practice.xlsx'},
    {'name': 'stimuli/6.png', 'path': 'stimuli/6.png'},
    {'name': 'stimuli/7.png', 'path': 'stimuli/7.png'},
    {'name': 'stimuli/16.png', 'path': 'stimuli/16.png'},
    {'name': 'stimuli/17.png', 'path': 'stimuli/17.png'},
    {'name': 'stimuli/8.png', 'path': 'stimuli/8.png'},
    {'name': 'stimuli/18.png', 'path': 'stimuli/18.png'},
    {'name': 'stimuli/19.png', 'path': 'stimuli/19.png'},
    {'name': 'stimuli/4.png', 'path': 'stimuli/4.png'},
    {'name': 'stimuli/5.png', 'path': 'stimuli/5.png'},
    {'name': 'stimuli/11.png', 'path': 'stimuli/11.png'},
    {'name': 'stimuli/13.png', 'path': 'stimuli/13.png'},
    {'name': 'stimuli/2.png', 'path': 'stimuli/2.png'},
    {'name': 'stimuli/3.png', 'path': 'stimuli/3.png'},
    {'name': 'stimuli/14.png', 'path': 'stimuli/14.png'},
    {'name': 'stimuli/15.png', 'path': 'stimuli/15.png'},
    {'name': 'list_block_rows.xlsx', 'path': 'list_block_rows.xlsx'},
    {'name': 'spatial_stroop_trial_info_list.xlsx', 'path': 'spatial_stroop_trial_info_list.xlsx'},
    {'name': 'stimuli/1.png', 'path': 'stimuli/1.png'},
    {'name': 'stimuli/11.png', 'path': 'stimuli/11.png'},
    {'name': 'stimuli/12.png', 'path': 'stimuli/12.png'},
    {'name': 'stimuli/5.png', 'path': 'stimuli/5.png'},
    {'name': 'stimuli/20.png', 'path': 'stimuli/20.png'},
    {'name': 'stimuli/4.png', 'path': 'stimuli/4.png'},
    {'name': 'stimuli/2.png', 'path': 'stimuli/2.png'},
    {'name': 'stimuli/18.png', 'path': 'stimuli/18.png'},
    {'name': 'stimuli/8.png', 'path': 'stimuli/8.png'},
    {'name': 'stimuli/17.png', 'path': 'stimuli/17.png'},
    {'name': 'stimuli/14.png', 'path': 'stimuli/14.png'},
    {'name': 'stimuli/9.png', 'path': 'stimuli/9.png'},
    {'name': 'stimuli/6.png', 'path': 'stimuli/6.png'},
    {'name': 'stimuli/3.png', 'path': 'stimuli/3.png'},
    {'name': 'stimuli/15.png', 'path': 'stimuli/15.png'},
    {'name': 'stimuli/7.png', 'path': 'stimuli/7.png'},
    {'name': 'stimuli/10.png', 'path': 'stimuli/10.png'},
    {'name': 'stimuli/16.png', 'path': 'stimuli/16.png'},
    {'name': 'stimuli/13.png', 'path': 'stimuli/13.png'},
    {'name': 'stimuli/19.png', 'path': 'stimuli/19.png'},
    {'name': 'stimuli/intro.bmp', 'path': 'stimuli/intro.bmp'},
    {'name': 'stimuli/orange_square.bmp', 'path': 'stimuli/orange_square.bmp'},
    {'name': 'stimuli/green_square.bmp', 'path': 'stimuli/green_square.bmp'},
    {'name': 'stimuli/blue_square.bmp', 'path': 'stimuli/blue_square.bmp'},
    {'name': 'stimuli/pink_square.bmp', 'path': 'stimuli/pink_square.bmp'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/pokeball.bmp', 'path': 'stimuli/pokeball.bmp'},
    {'name': 'stimuli/end.bmp', 'path': 'stimuli/end.bmp'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["name"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var begin_experimentClock;
var instruction_font_size;
var response_keys;
var duration_number;
var duration_fixation;
var duration_response;
var congruent_total_accuracy;
var skip_test;
var far_left_box_x;
var left_box_x;
var right_box_x;
var far_right_box;
var intro_taskClock;
var image_intro;
var instruction_congruentClock;
var instruction_text_congruent;
var key_resp_instruction_congruent;
var orange_square_instructions;
var green_square_instructions;
var blue_square_instructions;
var pink_square_instructions;
var blank500Clock;
var blank;
var trial_congruentClock;
var key_resp_congruent;
var image_congruent_stim;
var image_congruent_fixation;
var orange_square_cong_practice;
var green_square_cong_practice;
var blue_square_cong_practice;
var pink_square_cong_practice;
var instruction_incongruentClock;
var instruction_text_incongruent;
var key_resp_instruction_incongruent;
var trial_incongruentClock;
var key_resp_incongruent_practice;
var incongruent_correct_count;
var image_incongruent_stim;
var image_incongruent_fixation;
var orange_square_incong_practice;
var green_square_incong_practice;
var blue_square_incong_practice;
var pink_square_incong_practice;
var practice_endClock;
var image_practice_end;
var instruction_testClock;
var instruction_text_test;
var key_resp_instruction_test;
var trial_mixedClock;
var key_resp_test;
var image_stimuli_test;
var image_fixation_test;
var orange_square_mixed;
var green_square_mixed;
var blue_square_mixed;
var pink_square_mixed;
var restClock;
var rest_text;
var key_resp_rest;
var end_of_experimentClock;
var end_of_experiment_text;
var image_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin_experiment"
  begin_experimentClock = new util.Clock();
  // Run 'Begin Experiment' code from specifying_task_specs
  instruction_font_size = 0.04;
  response_keys = ["z", "x", "n", "m", "space"];
  duration_number = 2;
  duration_fixation = 1.5;
  duration_response = ((duration_number + duration_fixation) - 0.1);
  congruent_total_accuracy = 0;
  skip_test = 1;
  far_left_box_x = (- 0.55);
  left_box_x = (- 0.35);
  right_box_x = 0.35;
  far_right_box = 0.55;
  // Initialize components for Routine "intro_task"
  intro_taskClock = new util.Clock();
  image_intro = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_intro', units : undefined, 
    image : 'stimuli/intro.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction_congruent"
  instruction_congruentClock = new util.Clock();
  instruction_text_congruent = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_congruent',
    text: "You will see different colour Pokemon on the screen. \n\nYour job is to catch the Pokemon and put it in the correct colour box.\n\nPress the key for z for orange, x for green, n for blue and m for pink.\n\nRest your fingers on these keys, and let's try it.\nPress a key to start the practice.",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_congruent = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  orange_square_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'orange_square_instructions', units : undefined, 
    image : 'stimuli/orange_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.086, 0.082],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  green_square_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'green_square_instructions', units : undefined, 
    image : 'stimuli/green_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  blue_square_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_square_instructions', units : undefined, 
    image : 'stimuli/blue_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [right_box_x, (- 0.4)], 
    draggable: false,
    size : [0.084, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  pink_square_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_square_instructions', units : undefined, 
    image : 'stimuli/pink_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_right_box, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial_congruent"
  trial_congruentClock = new util.Clock();
  key_resp_congruent = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_congruent_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_congruent_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_congruent_fixation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_congruent_fixation', units : undefined, 
    image : 'stimuli/pokeball.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  orange_square_cong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'orange_square_cong_practice', units : undefined, 
    image : 'stimuli/orange_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.086, 0.082],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  green_square_cong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'green_square_cong_practice', units : undefined, 
    image : 'stimuli/green_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  blue_square_cong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_square_cong_practice', units : undefined, 
    image : 'stimuli/blue_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [right_box_x, (- 0.4)], 
    draggable: false,
    size : [0.084, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  pink_square_cong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_square_cong_practice', units : undefined, 
    image : 'stimuli/pink_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_right_box, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "instruction_incongruent"
  instruction_incongruentClock = new util.Clock();
  instruction_text_incongruent = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_incongruent',
    text: "Great. Now, the position of the Pokemon won't match where the coloured box are.\n\nThe position of the Pokemon doesn't matter, your job is to still catch the Pokemon according to its colour.\n\nFor example, if you see a green Pokemon on the right, the correct answer is x for green.\n\nRest your fingers on these keys, and let's try it.",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_incongruent = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_incongruent"
  trial_incongruentClock = new util.Clock();
  key_resp_incongruent_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from trial_incongruent_end_loop_code
  incongruent_correct_count = 0;
  image_incongruent_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_incongruent_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_incongruent_fixation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_incongruent_fixation', units : undefined, 
    image : 'stimuli/pokeball.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  orange_square_incong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'orange_square_incong_practice', units : undefined, 
    image : 'stimuli/orange_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.086, 0.082],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  green_square_incong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'green_square_incong_practice', units : undefined, 
    image : 'stimuli/green_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  blue_square_incong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_square_incong_practice', units : undefined, 
    image : 'stimuli/blue_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [right_box_x, (- 0.4)], 
    draggable: false,
    size : [0.084, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  pink_square_incong_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_square_incong_practice', units : undefined, 
    image : 'stimuli/pink_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_right_box, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  image_practice_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_practice_end', units : undefined, 
    image : 'stimuli/end.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.25, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction_test"
  instruction_testClock = new util.Clock();
  instruction_text_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_test',
    text: "Great. Let's carry on and do some more. \n\nEvery now and then there will be break points when you can rest.\n\nRemember to catch the pokemon in the matching coloured box.\n\nTry to respond as quickly as you can without making mistake.\n\nGet ready by putting your fingers on the keys. \n\nPress a key to continue.",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_mixed"
  trial_mixedClock = new util.Clock();
  key_resp_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_stimuli_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stimuli_test', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_fixation_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_fixation_test', units : undefined, 
    image : 'stimuli/pokeball.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.05, 0.05],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  orange_square_mixed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'orange_square_mixed', units : undefined, 
    image : 'stimuli/orange_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.086, 0.082],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  green_square_mixed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'green_square_mixed', units : undefined, 
    image : 'stimuli/green_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [left_box_x, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  blue_square_mixed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_square_mixed', units : undefined, 
    image : 'stimuli/blue_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [right_box_x, (- 0.4)], 
    draggable: false,
    size : [0.084, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  pink_square_mixed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_square_mixed', units : undefined, 
    image : 'stimuli/pink_square.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [far_right_box, (- 0.4)], 
    draggable: false,
    size : [0.085, 0.081],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  rest_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest_text',
    text: 'Have a short rest.\n\nWhen you are ready put your fingers on the keys and press a key to start.',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_of_experiment"
  end_of_experimentClock = new util.Clock();
  end_of_experiment_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_of_experiment_text',
    text: "Thank you, you're all done with this task!",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_end', units : undefined, 
    image : 'stimuli/end.bmp', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.25, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var begin_experimentMaxDurationReached;
var begin_experimentMaxDuration;
var begin_experimentComponents;
function begin_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'begin_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    begin_experimentClock.reset();
    routineTimer.reset();
    begin_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('begin_experiment.started', globalClock.getTime());
    begin_experimentMaxDuration = null
    // keep track of which components have finished
    begin_experimentComponents = [];
    
    for (const thisComponent of begin_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function begin_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'begin_experiment' ---
    // get current time
    t = begin_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of begin_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'begin_experiment' ---
    for (const thisComponent of begin_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('begin_experiment.stopped', globalClock.getTime());
    // the Routine "begin_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_taskMaxDurationReached;
var intro_taskMaxDuration;
var intro_taskComponents;
function intro_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_taskClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    intro_taskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro_task.started', globalClock.getTime());
    intro_taskMaxDuration = null
    // keep track of which components have finished
    intro_taskComponents = [];
    intro_taskComponents.push(image_intro);
    
    for (const thisComponent of intro_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function intro_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_task' ---
    // get current time
    t = intro_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_intro* updates
    if (t >= 0.0 && image_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_intro.tStart = t;  // (not accounting for frame time here)
      image_intro.frameNStart = frameN;  // exact frame index
      
      image_intro.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_intro.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_intro.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_task' ---
    for (const thisComponent of intro_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro_task.stopped', globalClock.getTime());
    if (intro_taskMaxDurationReached) {
        intro_taskClock.add(intro_taskMaxDuration);
    } else {
        intro_taskClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_congruentMaxDurationReached;
var _key_resp_instruction_congruent_allKeys;
var instruction_congruentMaxDuration;
var instruction_congruentComponents;
function instruction_congruentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_congruent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_congruentClock.reset();
    routineTimer.reset();
    instruction_congruentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_congruent.keys = undefined;
    key_resp_instruction_congruent.rt = undefined;
    _key_resp_instruction_congruent_allKeys = [];
    psychoJS.experiment.addData('instruction_congruent.started', globalClock.getTime());
    instruction_congruentMaxDuration = null
    // keep track of which components have finished
    instruction_congruentComponents = [];
    instruction_congruentComponents.push(instruction_text_congruent);
    instruction_congruentComponents.push(key_resp_instruction_congruent);
    instruction_congruentComponents.push(orange_square_instructions);
    instruction_congruentComponents.push(green_square_instructions);
    instruction_congruentComponents.push(blue_square_instructions);
    instruction_congruentComponents.push(pink_square_instructions);
    
    for (const thisComponent of instruction_congruentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_congruentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_congruent' ---
    // get current time
    t = instruction_congruentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_congruent* updates
    if (t >= 0.0 && instruction_text_congruent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_congruent.tStart = t;  // (not accounting for frame time here)
      instruction_text_congruent.frameNStart = frameN;  // exact frame index
      
      instruction_text_congruent.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_congruent* updates
    if (t >= 0.5 && key_resp_instruction_congruent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_congruent.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_congruent.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_congruent.clock.reset();
      key_resp_instruction_congruent.start();
      key_resp_instruction_congruent.clearEvents();
    }
    
    if (key_resp_instruction_congruent.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_congruent.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_instruction_congruent_allKeys = _key_resp_instruction_congruent_allKeys.concat(theseKeys);
      if (_key_resp_instruction_congruent_allKeys.length > 0) {
        key_resp_instruction_congruent.keys = _key_resp_instruction_congruent_allKeys[_key_resp_instruction_congruent_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_congruent.rt = _key_resp_instruction_congruent_allKeys[_key_resp_instruction_congruent_allKeys.length - 1].rt;
        key_resp_instruction_congruent.duration = _key_resp_instruction_congruent_allKeys[_key_resp_instruction_congruent_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *orange_square_instructions* updates
    if (t >= 0.0 && orange_square_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      orange_square_instructions.tStart = t;  // (not accounting for frame time here)
      orange_square_instructions.frameNStart = frameN;  // exact frame index
      
      orange_square_instructions.setAutoDraw(true);
    }
    
    
    // *green_square_instructions* updates
    if (t >= 0.0 && green_square_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_square_instructions.tStart = t;  // (not accounting for frame time here)
      green_square_instructions.frameNStart = frameN;  // exact frame index
      
      green_square_instructions.setAutoDraw(true);
    }
    
    
    // *blue_square_instructions* updates
    if (t >= 0.0 && blue_square_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_square_instructions.tStart = t;  // (not accounting for frame time here)
      blue_square_instructions.frameNStart = frameN;  // exact frame index
      
      blue_square_instructions.setAutoDraw(true);
    }
    
    
    // *pink_square_instructions* updates
    if (t >= 0.0 && pink_square_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_square_instructions.tStart = t;  // (not accounting for frame time here)
      pink_square_instructions.frameNStart = frameN;  // exact frame index
      
      pink_square_instructions.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_congruentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_congruentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_congruent' ---
    for (const thisComponent of instruction_congruentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_congruent.stopped', globalClock.getTime());
    key_resp_instruction_congruent.stop();
    // the Routine "instruction_congruent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(blank);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_loop_congruent_practice;
function trials_loop_congruent_practiceLoopBegin(trials_loop_congruent_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop_congruent_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_stim_congruent_practice.xlsx',
      seed: undefined, name: 'trials_loop_congruent_practice'
    });
    psychoJS.experiment.addLoop(trials_loop_congruent_practice); // add the loop to the experiment
    currentLoop = trials_loop_congruent_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop_congruent_practice of trials_loop_congruent_practice) {
      snapshot = trials_loop_congruent_practice.getSnapshot();
      trials_loop_congruent_practiceLoopScheduler.add(importConditions(snapshot));
      trials_loop_congruent_practiceLoopScheduler.add(trial_congruentRoutineBegin(snapshot));
      trials_loop_congruent_practiceLoopScheduler.add(trial_congruentRoutineEachFrame());
      trials_loop_congruent_practiceLoopScheduler.add(trial_congruentRoutineEnd(snapshot));
      trials_loop_congruent_practiceLoopScheduler.add(trials_loop_congruent_practiceLoopEndIteration(trials_loop_congruent_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loop_congruent_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop_congruent_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loop_congruent_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_loop_incongruent_practice;
function trials_loop_incongruent_practiceLoopBegin(trials_loop_incongruent_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop_incongruent_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_stim_incongruent_practice.xlsx',
      seed: undefined, name: 'trials_loop_incongruent_practice'
    });
    psychoJS.experiment.addLoop(trials_loop_incongruent_practice); // add the loop to the experiment
    currentLoop = trials_loop_incongruent_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop_incongruent_practice of trials_loop_incongruent_practice) {
      snapshot = trials_loop_incongruent_practice.getSnapshot();
      trials_loop_incongruent_practiceLoopScheduler.add(importConditions(snapshot));
      trials_loop_incongruent_practiceLoopScheduler.add(trial_incongruentRoutineBegin(snapshot));
      trials_loop_incongruent_practiceLoopScheduler.add(trial_incongruentRoutineEachFrame());
      trials_loop_incongruent_practiceLoopScheduler.add(trial_incongruentRoutineEnd(snapshot));
      trials_loop_incongruent_practiceLoopScheduler.add(trials_loop_incongruent_practiceLoopEndIteration(trials_loop_incongruent_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loop_incongruent_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop_incongruent_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loop_incongruent_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_phase_loop;
function test_phase_loopLoopBegin(test_phase_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_phase_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: skip_test, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_phase_loop'
    });
    psychoJS.experiment.addLoop(test_phase_loop); // add the loop to the experiment
    currentLoop = test_phase_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_phase_loop of test_phase_loop) {
      snapshot = test_phase_loop.getSnapshot();
      test_phase_loopLoopScheduler.add(importConditions(snapshot));
      test_phase_loopLoopScheduler.add(instruction_testRoutineBegin(snapshot));
      test_phase_loopLoopScheduler.add(instruction_testRoutineEachFrame());
      test_phase_loopLoopScheduler.add(instruction_testRoutineEnd(snapshot));
      test_phase_loopLoopScheduler.add(blank500RoutineBegin(snapshot));
      test_phase_loopLoopScheduler.add(blank500RoutineEachFrame());
      test_phase_loopLoopScheduler.add(blank500RoutineEnd(snapshot));
      const blocks_loop_mixedLoopScheduler = new Scheduler(psychoJS);
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopBegin(blocks_loop_mixedLoopScheduler, snapshot));
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopScheduler);
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopEnd);
      test_phase_loopLoopScheduler.add(test_phase_loopLoopEndIteration(test_phase_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var blocks_loop_mixed;
function blocks_loop_mixedLoopBegin(blocks_loop_mixedLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_loop_mixed = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_block_rows.xlsx',
      seed: undefined, name: 'blocks_loop_mixed'
    });
    psychoJS.experiment.addLoop(blocks_loop_mixed); // add the loop to the experiment
    currentLoop = blocks_loop_mixed;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlocks_loop_mixed of blocks_loop_mixed) {
      snapshot = blocks_loop_mixed.getSnapshot();
      blocks_loop_mixedLoopScheduler.add(importConditions(snapshot));
      const trials_mixed_loopLoopScheduler = new Scheduler(psychoJS);
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopBegin(trials_mixed_loopLoopScheduler, snapshot));
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopScheduler);
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopEnd);
      blocks_loop_mixedLoopScheduler.add(restRoutineBegin(snapshot));
      blocks_loop_mixedLoopScheduler.add(restRoutineEachFrame());
      blocks_loop_mixedLoopScheduler.add(restRoutineEnd(snapshot));
      blocks_loop_mixedLoopScheduler.add(blocks_loop_mixedLoopEndIteration(blocks_loop_mixedLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_mixed_loop;
function trials_mixed_loopLoopBegin(trials_mixed_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_mixed_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'spatial_stroop_trial_info_list.xlsx', list_of_rows),
      seed: undefined, name: 'trials_mixed_loop'
    });
    psychoJS.experiment.addLoop(trials_mixed_loop); // add the loop to the experiment
    currentLoop = trials_mixed_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_mixed_loop of trials_mixed_loop) {
      snapshot = trials_mixed_loop.getSnapshot();
      trials_mixed_loopLoopScheduler.add(importConditions(snapshot));
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineBegin(snapshot));
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineEachFrame());
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineEnd(snapshot));
      trials_mixed_loopLoopScheduler.add(trials_mixed_loopLoopEndIteration(trials_mixed_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_mixed_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_mixed_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_mixed_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_loop_mixedLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_loop_mixed);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_loop_mixedLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function test_phase_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_phase_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_phase_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_congruentMaxDurationReached;
var x_pos;
var y_pos;
var _key_resp_congruent_allKeys;
var trial_congruentMaxDuration;
var trial_congruentComponents;
function trial_congruentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_congruent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_congruentClock.reset();
    routineTimer.reset();
    trial_congruentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stimuli_position_congruent
    x_pos = x_val;
    y_pos = y_val;
    key_resp_congruent.keys = undefined;
    key_resp_congruent.rt = undefined;
    _key_resp_congruent_allKeys = [];
    image_congruent_stim.setPos([x_pos, y_pos]);
    image_congruent_stim.setImage(stim_path);
    trial_congruentMaxDuration = null
    // keep track of which components have finished
    trial_congruentComponents = [];
    trial_congruentComponents.push(key_resp_congruent);
    trial_congruentComponents.push(image_congruent_stim);
    trial_congruentComponents.push(image_congruent_fixation);
    trial_congruentComponents.push(orange_square_cong_practice);
    trial_congruentComponents.push(green_square_cong_practice);
    trial_congruentComponents.push(blue_square_cong_practice);
    trial_congruentComponents.push(pink_square_cong_practice);
    
    for (const thisComponent of trial_congruentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_congruentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_congruent' ---
    // get current time
    t = trial_congruentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_congruent* updates
    if (t >= 0.1 && key_resp_congruent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_congruent.tStart = t;  // (not accounting for frame time here)
      key_resp_congruent.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_congruent.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congruent.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congruent.clearEvents(); });
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_congruent.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_congruent.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_congruent.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_congruent.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_congruent_allKeys = _key_resp_congruent_allKeys.concat(theseKeys);
      if (_key_resp_congruent_allKeys.length > 0) {
        key_resp_congruent.keys = _key_resp_congruent_allKeys[_key_resp_congruent_allKeys.length - 1].name;  // just the last key pressed
        key_resp_congruent.rt = _key_resp_congruent_allKeys[_key_resp_congruent_allKeys.length - 1].rt;
        key_resp_congruent.duration = _key_resp_congruent_allKeys[_key_resp_congruent_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_congruent.keys == corr_key) {
            key_resp_congruent.corr = 1;
        } else {
            key_resp_congruent.corr = 0;
        }
      }
    }
    
    
    // *image_congruent_stim* updates
    if (t >= 0.0 && image_congruent_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_congruent_stim.tStart = t;  // (not accounting for frame time here)
      image_congruent_stim.frameNStart = frameN;  // exact frame index
      
      image_congruent_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_congruent_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_congruent_stim.setAutoDraw(false);
    }
    
    
    // *image_congruent_fixation* updates
    if (t >= 0 && image_congruent_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_congruent_fixation.tStart = t;  // (not accounting for frame time here)
      image_congruent_fixation.frameNStart = frameN;  // exact frame index
      
      image_congruent_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_congruent_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_congruent_fixation.setAutoDraw(false);
    }
    
    
    // *orange_square_cong_practice* updates
    if (t >= 0.0 && orange_square_cong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      orange_square_cong_practice.tStart = t;  // (not accounting for frame time here)
      orange_square_cong_practice.frameNStart = frameN;  // exact frame index
      
      orange_square_cong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (orange_square_cong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      orange_square_cong_practice.setAutoDraw(false);
    }
    
    
    // *green_square_cong_practice* updates
    if (t >= 0.0 && green_square_cong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_square_cong_practice.tStart = t;  // (not accounting for frame time here)
      green_square_cong_practice.frameNStart = frameN;  // exact frame index
      
      green_square_cong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (green_square_cong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      green_square_cong_practice.setAutoDraw(false);
    }
    
    
    // *blue_square_cong_practice* updates
    if (t >= 0.0 && blue_square_cong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_square_cong_practice.tStart = t;  // (not accounting for frame time here)
      blue_square_cong_practice.frameNStart = frameN;  // exact frame index
      
      blue_square_cong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blue_square_cong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blue_square_cong_practice.setAutoDraw(false);
    }
    
    
    // *pink_square_cong_practice* updates
    if (t >= 0.0 && pink_square_cong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_square_cong_practice.tStart = t;  // (not accounting for frame time here)
      pink_square_cong_practice.frameNStart = frameN;  // exact frame index
      
      pink_square_cong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_square_cong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pink_square_cong_practice.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_congruentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_congruentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_congruent' ---
    for (const thisComponent of trial_congruentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_congruent.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_congruent.corr = 1;  // correct non-response
      } else {
         key_resp_congruent.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_congruent.corr, level);
    }
    psychoJS.experiment.addData('key_resp_congruent.keys', key_resp_congruent.keys);
    psychoJS.experiment.addData('key_resp_congruent.corr', key_resp_congruent.corr);
    if (typeof key_resp_congruent.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_congruent.rt', key_resp_congruent.rt);
        psychoJS.experiment.addData('key_resp_congruent.duration', key_resp_congruent.duration);
        }
    
    key_resp_congruent.stop();
    // the Routine "trial_congruent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_incongruentMaxDurationReached;
var _key_resp_instruction_incongruent_allKeys;
var instruction_incongruentMaxDuration;
var instruction_incongruentComponents;
function instruction_incongruentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_incongruent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_incongruentClock.reset();
    routineTimer.reset();
    instruction_incongruentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_incongruent.keys = undefined;
    key_resp_instruction_incongruent.rt = undefined;
    _key_resp_instruction_incongruent_allKeys = [];
    psychoJS.experiment.addData('instruction_incongruent.started', globalClock.getTime());
    instruction_incongruentMaxDuration = null
    // keep track of which components have finished
    instruction_incongruentComponents = [];
    instruction_incongruentComponents.push(instruction_text_incongruent);
    instruction_incongruentComponents.push(key_resp_instruction_incongruent);
    
    for (const thisComponent of instruction_incongruentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_incongruentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_incongruent' ---
    // get current time
    t = instruction_incongruentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_incongruent* updates
    if (t >= 0.0 && instruction_text_incongruent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_incongruent.tStart = t;  // (not accounting for frame time here)
      instruction_text_incongruent.frameNStart = frameN;  // exact frame index
      
      instruction_text_incongruent.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_incongruent* updates
    if (t >= 0.5 && key_resp_instruction_incongruent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_incongruent.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_incongruent.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_incongruent.clock.reset();
      key_resp_instruction_incongruent.start();
      key_resp_instruction_incongruent.clearEvents();
    }
    
    if (key_resp_instruction_incongruent.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_incongruent.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_instruction_incongruent_allKeys = _key_resp_instruction_incongruent_allKeys.concat(theseKeys);
      if (_key_resp_instruction_incongruent_allKeys.length > 0) {
        key_resp_instruction_incongruent.keys = _key_resp_instruction_incongruent_allKeys[_key_resp_instruction_incongruent_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_incongruent.rt = _key_resp_instruction_incongruent_allKeys[_key_resp_instruction_incongruent_allKeys.length - 1].rt;
        key_resp_instruction_incongruent.duration = _key_resp_instruction_incongruent_allKeys[_key_resp_instruction_incongruent_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_incongruentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_incongruentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_incongruent' ---
    for (const thisComponent of instruction_incongruentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_incongruent.stopped', globalClock.getTime());
    key_resp_instruction_incongruent.stop();
    // the Routine "instruction_incongruent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_incongruentMaxDurationReached;
var _key_resp_incongruent_practice_allKeys;
var trial_incongruentMaxDuration;
var trial_incongruentComponents;
function trial_incongruentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_incongruent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_incongruentClock.reset();
    routineTimer.reset();
    trial_incongruentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stimuli_position_incongruent
    x_pos = x_val;
    y_pos = y_val;
    key_resp_incongruent_practice.keys = undefined;
    key_resp_incongruent_practice.rt = undefined;
    _key_resp_incongruent_practice_allKeys = [];
    image_incongruent_stim.setPos([x_pos, y_pos]);
    image_incongruent_stim.setImage(stim_path);
    psychoJS.experiment.addData('trial_incongruent.started', globalClock.getTime());
    trial_incongruentMaxDuration = null
    // keep track of which components have finished
    trial_incongruentComponents = [];
    trial_incongruentComponents.push(key_resp_incongruent_practice);
    trial_incongruentComponents.push(image_incongruent_stim);
    trial_incongruentComponents.push(image_incongruent_fixation);
    trial_incongruentComponents.push(orange_square_incong_practice);
    trial_incongruentComponents.push(green_square_incong_practice);
    trial_incongruentComponents.push(blue_square_incong_practice);
    trial_incongruentComponents.push(pink_square_incong_practice);
    
    for (const thisComponent of trial_incongruentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_incongruentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_incongruent' ---
    // get current time
    t = trial_incongruentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_incongruent_practice* updates
    if (t >= 0.1 && key_resp_incongruent_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_incongruent_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_incongruent_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_incongruent_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_incongruent_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_incongruent_practice.clearEvents(); });
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_incongruent_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_incongruent_practice.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_incongruent_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_incongruent_practice.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_incongruent_practice_allKeys = _key_resp_incongruent_practice_allKeys.concat(theseKeys);
      if (_key_resp_incongruent_practice_allKeys.length > 0) {
        key_resp_incongruent_practice.keys = _key_resp_incongruent_practice_allKeys[_key_resp_incongruent_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_incongruent_practice.rt = _key_resp_incongruent_practice_allKeys[_key_resp_incongruent_practice_allKeys.length - 1].rt;
        key_resp_incongruent_practice.duration = _key_resp_incongruent_practice_allKeys[_key_resp_incongruent_practice_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_incongruent_practice.keys == corr_key) {
            key_resp_incongruent_practice.corr = 1;
        } else {
            key_resp_incongruent_practice.corr = 0;
        }
      }
    }
    
    
    // *image_incongruent_stim* updates
    if (t >= 0.0 && image_incongruent_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_incongruent_stim.tStart = t;  // (not accounting for frame time here)
      image_incongruent_stim.frameNStart = frameN;  // exact frame index
      
      image_incongruent_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_incongruent_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_incongruent_stim.setAutoDraw(false);
    }
    
    
    // *image_incongruent_fixation* updates
    if (t >= 0 && image_incongruent_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_incongruent_fixation.tStart = t;  // (not accounting for frame time here)
      image_incongruent_fixation.frameNStart = frameN;  // exact frame index
      
      image_incongruent_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_incongruent_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_incongruent_fixation.setAutoDraw(false);
    }
    
    
    // *orange_square_incong_practice* updates
    if (t >= 0.0 && orange_square_incong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      orange_square_incong_practice.tStart = t;  // (not accounting for frame time here)
      orange_square_incong_practice.frameNStart = frameN;  // exact frame index
      
      orange_square_incong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (orange_square_incong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      orange_square_incong_practice.setAutoDraw(false);
    }
    
    
    // *green_square_incong_practice* updates
    if (t >= 0.0 && green_square_incong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_square_incong_practice.tStart = t;  // (not accounting for frame time here)
      green_square_incong_practice.frameNStart = frameN;  // exact frame index
      
      green_square_incong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (green_square_incong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      green_square_incong_practice.setAutoDraw(false);
    }
    
    
    // *blue_square_incong_practice* updates
    if (t >= 0.0 && blue_square_incong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_square_incong_practice.tStart = t;  // (not accounting for frame time here)
      blue_square_incong_practice.frameNStart = frameN;  // exact frame index
      
      blue_square_incong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blue_square_incong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blue_square_incong_practice.setAutoDraw(false);
    }
    
    
    // *pink_square_incong_practice* updates
    if (t >= 0.0 && pink_square_incong_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_square_incong_practice.tStart = t;  // (not accounting for frame time here)
      pink_square_incong_practice.frameNStart = frameN;  // exact frame index
      
      pink_square_incong_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_square_incong_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pink_square_incong_practice.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_incongruentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_incongruentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_incongruent' ---
    for (const thisComponent of trial_incongruentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_incongruent.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_incongruent_practice.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_incongruent_practice.corr = 1;  // correct non-response
      } else {
         key_resp_incongruent_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_incongruent_practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_incongruent_practice.keys', key_resp_incongruent_practice.keys);
    psychoJS.experiment.addData('key_resp_incongruent_practice.corr', key_resp_incongruent_practice.corr);
    if (typeof key_resp_incongruent_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_incongruent_practice.rt', key_resp_incongruent_practice.rt);
        psychoJS.experiment.addData('key_resp_incongruent_practice.duration', key_resp_incongruent_practice.duration);
        }
    
    key_resp_incongruent_practice.stop();
    // Run 'End Routine' code from trial_incongruent_end_loop_code
    if ((key_resp_incongruent_practice.corr === 1)) {
        incongruent_correct_count = (incongruent_correct_count + 1);
    }
    if ((key_resp_incongruent_practice.corr === 0)) {
        incongruent_correct_count = 0;
    }
    if ((incongruent_correct_count >= 3)) {
        trials_loop_incongruent_practice.finished = true;
    }
    // the Routine "trial_incongruent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_endMaxDurationReached;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_endClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    practice_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
    practice_endMaxDuration = null
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(image_practice_end);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_practice_end* updates
    if (t >= 0.0 && image_practice_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_practice_end.tStart = t;  // (not accounting for frame time here)
      image_practice_end.frameNStart = frameN;  // exact frame index
      
      image_practice_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_practice_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_practice_end.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_end' ---
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
    if (practice_endMaxDurationReached) {
        practice_endClock.add(practice_endMaxDuration);
    } else {
        practice_endClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_testMaxDurationReached;
var _key_resp_instruction_test_allKeys;
var instruction_testMaxDuration;
var instruction_testComponents;
function instruction_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_testClock.reset();
    routineTimer.reset();
    instruction_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_test.keys = undefined;
    key_resp_instruction_test.rt = undefined;
    _key_resp_instruction_test_allKeys = [];
    psychoJS.experiment.addData('instruction_test.started', globalClock.getTime());
    instruction_testMaxDuration = null
    // keep track of which components have finished
    instruction_testComponents = [];
    instruction_testComponents.push(instruction_text_test);
    instruction_testComponents.push(key_resp_instruction_test);
    
    for (const thisComponent of instruction_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_test' ---
    // get current time
    t = instruction_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_test* updates
    if (t >= 0.0 && instruction_text_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_test.tStart = t;  // (not accounting for frame time here)
      instruction_text_test.frameNStart = frameN;  // exact frame index
      
      instruction_text_test.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_test* updates
    if (t >= 0.5 && key_resp_instruction_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_test.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_test.clock.reset();
      key_resp_instruction_test.start();
      key_resp_instruction_test.clearEvents();
    }
    
    if (key_resp_instruction_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_test.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_instruction_test_allKeys = _key_resp_instruction_test_allKeys.concat(theseKeys);
      if (_key_resp_instruction_test_allKeys.length > 0) {
        key_resp_instruction_test.keys = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_test.rt = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].rt;
        key_resp_instruction_test.duration = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_test' ---
    for (const thisComponent of instruction_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_test.stopped', globalClock.getTime());
    key_resp_instruction_test.stop();
    // the Routine "instruction_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_mixedMaxDurationReached;
var _key_resp_test_allKeys;
var trial_mixedMaxDuration;
var trial_mixedComponents;
function trial_mixedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_mixed' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_mixedClock.reset();
    routineTimer.reset();
    trial_mixedMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stimuli_position_test
    x_pos = x_val;
    y_pos = y_val;
    key_resp_test.keys = undefined;
    key_resp_test.rt = undefined;
    _key_resp_test_allKeys = [];
    image_stimuli_test.setPos([x_pos, y_pos]);
    image_stimuli_test.setImage(stim_path);
    psychoJS.experiment.addData('trial_mixed.started', globalClock.getTime());
    trial_mixedMaxDuration = null
    // keep track of which components have finished
    trial_mixedComponents = [];
    trial_mixedComponents.push(key_resp_test);
    trial_mixedComponents.push(image_stimuli_test);
    trial_mixedComponents.push(image_fixation_test);
    trial_mixedComponents.push(orange_square_mixed);
    trial_mixedComponents.push(green_square_mixed);
    trial_mixedComponents.push(blue_square_mixed);
    trial_mixedComponents.push(pink_square_mixed);
    
    for (const thisComponent of trial_mixedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_mixedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_mixed' ---
    // get current time
    t = trial_mixedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_test* updates
    if (t >= 0.1 && key_resp_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_test.tStart = t;  // (not accounting for frame time here)
      key_resp_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_test.clock.reset();
      key_resp_test.start();
      key_resp_test.clearEvents();
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_test.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_test.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_test_allKeys = _key_resp_test_allKeys.concat(theseKeys);
      if (_key_resp_test_allKeys.length > 0) {
        key_resp_test.keys = _key_resp_test_allKeys[0].name;  // just the first key pressed
        key_resp_test.rt = _key_resp_test_allKeys[0].rt;
        key_resp_test.duration = _key_resp_test_allKeys[0].duration;
        // was this correct?
        if (key_resp_test.keys == corr_key) {
            key_resp_test.corr = 1;
        } else {
            key_resp_test.corr = 0;
        }
      }
    }
    
    
    // *image_stimuli_test* updates
    if (t >= 0.0 && image_stimuli_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stimuli_test.tStart = t;  // (not accounting for frame time here)
      image_stimuli_test.frameNStart = frameN;  // exact frame index
      
      image_stimuli_test.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_stimuli_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_stimuli_test.setAutoDraw(false);
    }
    
    
    // *image_fixation_test* updates
    if (t >= 0 && image_fixation_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_fixation_test.tStart = t;  // (not accounting for frame time here)
      image_fixation_test.frameNStart = frameN;  // exact frame index
      
      image_fixation_test.setAutoDraw(true);
    }
    
    frameRemains = 0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_fixation_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_fixation_test.setAutoDraw(false);
    }
    
    
    // *orange_square_mixed* updates
    if (t >= 0.0 && orange_square_mixed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      orange_square_mixed.tStart = t;  // (not accounting for frame time here)
      orange_square_mixed.frameNStart = frameN;  // exact frame index
      
      orange_square_mixed.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (orange_square_mixed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      orange_square_mixed.setAutoDraw(false);
    }
    
    
    // *green_square_mixed* updates
    if (t >= 0.0 && green_square_mixed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_square_mixed.tStart = t;  // (not accounting for frame time here)
      green_square_mixed.frameNStart = frameN;  // exact frame index
      
      green_square_mixed.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (green_square_mixed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      green_square_mixed.setAutoDraw(false);
    }
    
    
    // *blue_square_mixed* updates
    if (t >= 0.0 && blue_square_mixed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_square_mixed.tStart = t;  // (not accounting for frame time here)
      blue_square_mixed.frameNStart = frameN;  // exact frame index
      
      blue_square_mixed.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blue_square_mixed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blue_square_mixed.setAutoDraw(false);
    }
    
    
    // *pink_square_mixed* updates
    if (t >= 0.0 && pink_square_mixed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_square_mixed.tStart = t;  // (not accounting for frame time here)
      pink_square_mixed.frameNStart = frameN;  // exact frame index
      
      pink_square_mixed.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (duration_number + duration_fixation) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_square_mixed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pink_square_mixed.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_mixedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_mixedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_mixed' ---
    for (const thisComponent of trial_mixedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_mixed.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_test.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_test.corr = 1;  // correct non-response
      } else {
         key_resp_test.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_test.corr, level);
    }
    psychoJS.experiment.addData('key_resp_test.keys', key_resp_test.keys);
    psychoJS.experiment.addData('key_resp_test.corr', key_resp_test.corr);
    if (typeof key_resp_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_test.rt', key_resp_test.rt);
        psychoJS.experiment.addData('key_resp_test.duration', key_resp_test.duration);
        }
    
    key_resp_test.stop();
    // the Routine "trial_mixed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var restMaxDurationReached;
var _key_resp_rest_allKeys;
var maxDurationReached;
var restMaxDuration;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    restClock.reset();
    routineTimer.reset();
    restMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_rest.keys = undefined;
    key_resp_rest.rt = undefined;
    _key_resp_rest_allKeys = [];
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((block_number_loop == 4));
    maxDurationReached = false
    restMaxDuration = null
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(rest_text);
    restComponents.push(key_resp_rest);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rest_text* updates
    if (t >= 0.0 && rest_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_text.tStart = t;  // (not accounting for frame time here)
      rest_text.frameNStart = frameN;  // exact frame index
      
      rest_text.setAutoDraw(true);
    }
    
    
    // *key_resp_rest* updates
    if (t >= 1 && key_resp_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rest.tStart = t;  // (not accounting for frame time here)
      key_resp_rest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_rest.clock.reset();
      key_resp_rest.start();
      key_resp_rest.clearEvents();
    }
    
    if (key_resp_rest.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rest.getKeys({keyList: ['z', 'x', 'n', 'm'], waitRelease: false});
      _key_resp_rest_allKeys = _key_resp_rest_allKeys.concat(theseKeys);
      if (_key_resp_rest_allKeys.length > 0) {
        key_resp_rest.keys = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].name;  // just the last key pressed
        key_resp_rest.rt = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].rt;
        key_resp_rest.duration = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    key_resp_rest.stop();
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_of_experimentMaxDurationReached;
var end_of_experimentMaxDuration;
var end_of_experimentComponents;
function end_of_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_of_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    end_of_experimentClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    end_of_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_of_experiment.started', globalClock.getTime());
    end_of_experimentMaxDuration = null
    // keep track of which components have finished
    end_of_experimentComponents = [];
    end_of_experimentComponents.push(end_of_experiment_text);
    end_of_experimentComponents.push(image_end);
    
    for (const thisComponent of end_of_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_of_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_of_experiment' ---
    // get current time
    t = end_of_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_of_experiment_text* updates
    if (t >= 2 && end_of_experiment_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_of_experiment_text.tStart = t;  // (not accounting for frame time here)
      end_of_experiment_text.frameNStart = frameN;  // exact frame index
      
      end_of_experiment_text.setAutoDraw(true);
    }
    
    frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_of_experiment_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_of_experiment_text.setAutoDraw(false);
    }
    
    
    // *image_end* updates
    if (t >= 0.0 && image_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_end.tStart = t;  // (not accounting for frame time here)
      image_end.frameNStart = frameN;  // exact frame index
      
      image_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_end.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_of_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_of_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_of_experiment' ---
    for (const thisComponent of end_of_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_of_experiment.stopped', globalClock.getTime());
    if (end_of_experimentMaxDurationReached) {
        end_of_experimentClock.add(end_of_experimentMaxDuration);
    } else {
        end_of_experimentClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
