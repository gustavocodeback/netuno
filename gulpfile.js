const gulp = require( 'gulp' );
const ts   = require( 'gulp-typescript' );

// Inicializa o projeto TypeScript
const tsProject = ts.createProject( './tsconfig.json' );

/**
 * build
 * 
 * compila o typescript
 * 
 */
gulp.task( 'build', () => {
    const tsResult = gulp.src( [ 'typings/**/*.ts', 'src/**/*.ts' ] )
                       .pipe( tsProject() );
    return tsResult.js.pipe( gulp.dest( 'dist' ) );
});

/**
 * watch
 * 
 * compila o typescript sempre que existir uma alteracao no arquivo
 * 
 */
gulp.task('watch', () => {
    
    //Escuta os arquivos
    gulp.watch('src/**/*.ts', ['build']);
}); 

/**
 * default
 * 
 * Define a tarefa padrao do tema
 * 
 */
gulp.task( 'default', [ 'build' ] );

/* end of file */
