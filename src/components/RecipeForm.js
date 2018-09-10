import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

export const RecipeForm = ({ errors, touched, values }) => {
  return (
    <div className='main-container'>
      <h2 className='form__title'>Recipe form</h2>
      <Form>
        <div className='form__basicinfo'>
          <div className='form__group'>
            <label>Title <span className='form__required'>*</span></label>
            <Field
              type="text"
              name="title"
              component="input"
              placeholder="Dumplings"
              className={errors.title && touched.title ? 'form__input form__input--error' : 'form__input'}
            />
            {errors.title && touched.title && <div className='input__feedback'>{errors.title}</div>}
          </div>

          <div className='form__group'>
            <label>Portions <span className='form__required'>*</span></label>
            <Field
              type="number"
              name="feeds"
              component="input"
              placeholder="4"
              className={errors.feeds && touched.feeds ? 'form__input form__input--error' : 'form__input'}
            />
            {errors.feeds && touched.feeds && <div className='input__feedback'>{errors.feeds}</div>}
          </div>

          <div className='form__group'>
            <label>Time needed (minutes) <span className='form__required'>*</span></label>
            <Field
              type="number"
              name="preparation"
              component="input"
              placeholder="60"
              className={errors.preparation && touched.preparation ? 'form__input form__input--error' : 'form__input'}
            />
            {errors.preparation && touched.preparation && <div className='input__feedback'>{errors.preparation}</div>}
          </div>
        </div>
        <div className='form__advancedinfo'>
          <div className='form__group form__group--ingredients'>
            <label>Ingredients <span className='form__required'>*</span></label>
            <Field
              type="text"
              name="ingredients"
              component="textarea"
              placeholder={`350g flour\n250ml water\n1tbs salt\n...`}
              className={errors.ingredients && touched.ingredients ? 'form__input form__input--textarea form__input--error ' : 'form__input form__input--textarea'}
            />
            {errors.ingredients && touched.ingredients && <div className='input__feedback'>{errors.ingredients}</div>}
          </div>

          <div className='form__group  form__group--instructions'>
            <label>Instructions <span className='form__required'>*</span></label>
            <Field
              type="text"
              name="instructions"
              component="textarea"
              placeholder={`Mix flour with water\nAdd salt\n...`}
              className={errors.instructions && touched.instructions ? 'form__input form__input--textarea form__input--error ' : 'form__input form__input--textarea'}
            />
            {errors.instructions && touched.instructions && <div className='input__feedback'>{errors.instructions}</div>}
          </div>
        </div>
        <div className='form__button'>
          <button className='button button--add' type='submit'>Submit recipe</button>
        </div>
      </Form>
    </div>
  );
}

const schema = {
  title: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)\s]*$/, 'No special characters allowed').max(16, 'Maximum allowed characters is 16').trim().lowercase(),
  feeds: Yup.number().required('Required field').min(1, 'Minimum number of portions is 1').max(8, 'Maximum number of portions is 8'),
  preparation: Yup.number().required('Required field').min(10, 'Minimum preparation time is 10minutes').max(300, 'Maximum preparation time is 5 hours'),
  ingredients: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)\n\s]*$/, 'No special characters allowed').trim(),
  instructions: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)\n\s]*$/, 'No special characters allowed').trim()
};

export const FormikRecipeForm = withFormik({
  mapPropsToValues({ recipe }) {
    return {
      title: recipe ? recipe.title : '',
      feeds: recipe ? recipe.feeds : '',
      preparation: recipe ? recipe.preparation : '',
      ingredients: recipe ? recipe.ingredients.join('\n') : '',
      instructions: recipe ? recipe.instructions.join('\n') : ''
    }
  },
  validationSchema: Yup.object().shape(schema),
  handleSubmit(values, { props }) {
    props.onSubmit({
      ...values,
      ingredients: values.ingredients.split('\n').filter(item => item),
      instructions: values.instructions.split('\n').filter(item => item)
    });
  }

})(RecipeForm);

export default FormikRecipeForm;

// export default class RecipeForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: props.recipe ? props.recipe.title : '',
//       feeds: props.recipe ? props.recipe.feeds : '',
//       preparation: props.recipe ? props.recipe.preparation : '',
//       ingredients: props.recipe ? props.recipe.ingredients : [],
//       instructions: props.recipe ? props.recipe.instructions : [],
//       error: ''
//     };
//   }

//   onTitleChange = (e) => {
//     const title = e.target.value;
//     this.setState(() => ({ title }))
//   }
//   onFeedsChange = (e) => {
//     const feeds = e.target.value;
//     this.setState(() => ({ feeds }))

//   }
//   onPrepChange = (e) => {
//     const preparation = e.target.value;
//     this.setState(() => ({ preparation }))

//   }
//   onInstructionChange = (e) => {
//     const instructions = e.target.value;
//     this.setState(() => ({ instructions: instructions.split("\n") }))
//   }
//   onIngredientsChange = (e) => {
//     const ingredients = e.target.value;
//     this.setState(() => ({ ingredients: ingredients.split("\n") }))
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (!this.state.title || !this.state.ingredients || !this.state.instructions) {
//       this.setState(() => ({ error: 'Please set correct' }))
//     }
//     else {
//       this.setState(() => ({
//         error: ''
//       }))
//       this.props.onSubmit({
//         title: this.state.title,
//         feeds: this.state.feeds,
//         preparation: this.state.preparation,
//         ingredients: this.state.ingredients.filter((item) => (item)),
//         instructions: this.state.instructions.filter((item) => (item))
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.onSubmit}>
//           <input
//             autoFocus
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={this.state.title}
//             onChange={this.onTitleChange}
//           />
//           <input
//             type="text"
//             name="feeds"
//             placeholder="2"
//             value={this.state.feeds}
//             onChange={this.onFeedsChange}
//           />
//           <input
//             type="text"
//             name="preparation"
//             placeholder="60"
//             value={this.state.preparation}
//             onChange={this.onPrepChange}
//           />
//           <textarea
//             placeholder="Ingredients"
//             value={this.state.ingredients.join("\n")}
//             onChange={this.onIngredientsChange}
//           />
//           <textarea
//             placeholder="Instructions"
//             value={this.state.instructions.join("\n")}
//             onChange={this.onInstructionChange}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }


