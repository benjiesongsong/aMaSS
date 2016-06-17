function AddExerciseController (ExerciseService, $state) {

  let vm = this;
  vm.addExercise = addExercise;
  vm.bodyParts = [
    'Shoulders',
    'Upper Arms',
    'Forearms',
    'Chest',
    'Waist',
    'Back',
    'Hips',
    'Thighs',
    'Calves'
  ];

  vm.muscles = [
    'Anterior deltoid',
    'Biceps brachii',
    'Biceps femoris',
    'Brachialis',
    'Gastrocnemius',
    'Gluteus maximus',
    'Latissimus dorsi',
    'Obliquus externus abdominis',
    'Pectoralis major',
    'Quadriceps femoris',
    'Rectus abdominis',
    'Serratus anterior',
    'Soleus',
    'Trapezius',
    'Triceps brachii'
  ]

  function addExercise(exercise) {
    ExerciseService.add(exercise);
    $state.go('root.home')
  }
}

AddExerciseController.$inject = ['ExerciseService', '$state'];
export { AddExerciseController };
