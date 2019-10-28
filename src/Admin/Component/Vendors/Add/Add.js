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
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tabs from '../../../UI/Tabs/Tabs';
import Select from 'react-select';
import './Add.css';


const Add = props =>{
    console.log(props);
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const salutation = [
        {
          value: 'Mr.',
          label: 'Mr.',
        },
        {
          value: 'Mrs.',
          label: 'Mrs.',
        },
        {
          value: 'Ms.',
          label: 'Miss.',
        },
        {
          value: 'Dr.',
          label: 'Dr.',
        },
      ];
    const options = [
        { value: 'INR', label: 'INR-Rupees' },
        { value: 'USD', label: 'USD-Dollars' },
        { value: 'EUR', label: 'EUR-Euro' },
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
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            id="vendor-display-name"
                            label="Vendor Display Name"
                            helperText="Vendor Display Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField required id="vendor-email" label="Vendor Email" fullWidth />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <TextField required id="work-phone" label="Work Phone" fullWidth />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <TextField required id="mobile" label="Mobile" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={2}>Add More Details</Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container  alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Skype Contact" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="designation" label="Designation" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="department" label="Department" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="website" label="Website" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Tabs>
                            <div label="Other Details">
                               
                                <Grid item xs={12} md={12}>
                                    <Select
                                        // value={selectedOption}
                                        // onChange={this.handleSelectChange}
                                        options={options}
                                    />
                                </Grid>

                            </div>
                            <div label="Address">
                                After 'while, <em>Crocodile</em>!
                            </div>
                            <div label="Contact Persons">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                            <div label="Custom Fields">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                            <div label="Reporting Tags">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                        </Tabs>
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