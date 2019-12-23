const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const dbName = 'celebrity-database';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [{
    name: 'Rafael Dias',
    occupation: 'Fullstack Web Developer',
    catchPhrase: 'enjoy'
  },
  {
    name: 'Elinalda Dias',
    occupation: 'Designer',
    catchPhrase: 'Banandia'
  },
  {
    name: 'Melzinha',
    occupation: 'Meliante',
    catchPhrase: 'Vamos brincar de bolinha, opa, vou pegar essa sombra!!!'
  }
]

const movie = [{
    title: 'A dona do pedaço',
    genre: 'Drama',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus enim id metus dictum, in ultricies dolor convallis. Quisque eget turpis sagittis, bibendum odio non, lobortis erat. Etiam ut erat aliquam felis placerat dictum eu a justo. Nullam egestas luctus dui, et aliquam augue porta et. Maecenas interdum ante eu ex tincidunt, hendrerit molestie magna convallis. Aliquam erat volutpat. Sed nulla diam, aliquet nec ornare nec, vestibulum non magna. Nulla pellentesque arcu a mauris iaculis, vitae facilisis felis molestie. Duis facilisis non nulla ut tempus. Sed auctor id est a dapibus. Vivamus tincidunt magna id turpis sodales, in ultrices libero vehicula.'
  },
  {
    title: 'O pistoleiro sem dedo',
    genre: 'Ação',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur erat sit amet massa euismod posuere. Pellentesque tristique orci ac quam pretium pharetra. Maecenas interdum odio et nulla facilisis, in porta dolor congue. In tempus risus non sollicitudin consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nulla laoreet enim quis diam ullamcorper, in eleifend nisl fringilla. Ut sollicitudin ex quis neque finibus, quis laoreet arcu ultrices. Nulla facilisi. Donec tempus felis sit amet facilisis consequat. Mauris ornare sapien vitae neque accumsan, eu ultrices quam gravida. Donec vitae accumsan ante, sed condimentum turpis. Aenean et rhoncus dolor, vitae rhoncus erat. Vivamus quis ex eget mi finibus cursus. Mauris laoreet in purus ac gravida.'
  },
  {
    title: 'O gato de botas',
    genre: 'Comédia',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet vehicula interdum. Proin dapibus purus ipsum, vel molestie eros bibendum ac. In efficitur pretium ullamcorper. Suspendisse convallis non eros vel hendrerit. Quisque imperdiet pellentesque mi. Nulla ligula leo, tincidunt sed ipsum quis, sollicitudin ultrices sem. Sed suscipit risus nec magna rutrum pharetra. Nulla molestie dui vel nisl consectetur tincidunt. Mauris pretium ligula a aliquam mollis. Donec egestas justo ut lorem porttitor, sit amet ultrices leo imperdiet. Fusce porttitor vel elit non interdum.'
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close();
});


Movie.create(movie, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movie.length} movies`)
  mongoose.connection.close();
});