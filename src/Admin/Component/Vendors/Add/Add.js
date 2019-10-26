import React from 'react';
import Layout from '../../../Layout/Backend/Backend';
import Container from '@material-ui/core/Container';
import useStyles from '../../../Hooks/useStyle';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

const Add = props =>{
    console.log(props);
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const salutation = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];


    const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            salutation: '',
    });
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Layout title="Add Vendor">
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h6" gutterBottom>
                    Add New Vendor
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="standard-select-salutation"
                            select
                            label="Salutation"
                            className={classes.textField}
                            value={values.salutation}
                            onChange={handleChange('salutation')}
                            SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                            }}
                            helperText="Please select Salutation"
                            margin="normal"
                            fullWidth
                        >{salutation.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required id="cardNumber" label="Card number" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required id="cardNumber" label="Card number" fullWidth />
                    </Grid>

                    <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Expiry date" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                    </Grid>
                </Grid> 
            </Container>
        </Layout>
    )
}

export default Add;