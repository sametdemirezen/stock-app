import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { Formik,Form } from "formik"
import { object, string} from 'yup';
import { login } from "../service/authApiCall"
const Login = () => {
  const navigate = useNavigate()
  
  const loginSchema = object({
    email: string().email().required(),
    password: string().required("Bu alan zorunludur!").min(8, "En az 8 karakter girilmelidir").max(16,"En fazla 16 char olmalidir.").matches(/\d+/, "En az bir rakam icermelidir.").matches(/[a-z]/, "En az bir kucuk harf icermelidir.").matches(/[A-Z]/, "En az bir kucuk harf icermelidir.").matches(/[a-z]/, "En az bir kucuk harf icermelidir.")
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

            <Formik initialValues={{email:"", password:""}}
            validationSchema={loginSchema}
            onSubmit= {(values, action) => {
              login(values)
              action.resetForm()
              action.setSubmitting(false)
            }}
            >
            { ({handleChange, handleBlur, values, touched, errors}) => (
              <Form>
                <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={ errors.email}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={ errors.password}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
              </Form>
              
  

            )}
            </Formik>
          
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
