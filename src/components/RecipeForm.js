import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const RecipeForm = ({ errors, touched }) => {
  return (
    <div>
      <Form>
        <label>Title</label>
        <Field type="text" name="title" component="input" />
        {errors.title && touched.title && <div>{errors.title}</div>}

        <label>Portions</label>
        <Field type="number" name="feeds" component="input" />
        {errors.feeds && touched.feeds && <div>{errors.feeds}</div>}

        <label>Preparation time in minutes</label>
        <Field type="number" name="preparation" component="input" />
        {errors.preparation && touched.preparation && <div>{errors.preparation}</div>}

        <label>Ingredients</label>
        <Field type="text" name="ingredients" component="textarea" />
        {errors.ingredients && touched.ingredients && <div>{errors.ingredients}</div>}

        <label>Instructions</label>
        <Field type="text" name="instructions" component="textarea" />
        {errors.instructions && touched.instructions && <div>{errors.instructions}</div>}

        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}

const schema = {
  title: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)]*$/, 'No special characters allowed'),
  feeds: Yup.number().required('Required field').min(1, 'Minimum number of portions is 1').max(8, 'Maximum number of portions is 8'),
  preparation: Yup.number().required('Required field').min(10, 'Minimum preparation time is 10minutes').max(300, 'Maximum preparation time is 5 hours'),
  ingredients: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)\n\s]*$/, 'No special characters allowed'),
  instructions: Yup.string().required('Required field').matches(/^[a-zA-Z0-9,\.\-\/:\(\)\n\s]*$/, 'No special characters allowed')
};

const FormikRecipeForm = withFormik({
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
      ingredients: values.instructions.split('\n').filter(item => item),
      instructions: values.ingredients.split('\n').filter(item => item)
    });
  }

})(RecipeForm);

export default FormikRecipeForm;




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


