import React, { useEffect } from 'react';
import { Button, Stack, TextField, InputLabel } from '@mui/material';
import './Information.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Information() {
    const data = useSelector((state) => state.data);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/', { state: { data: data[0] } });
    };

    useEffect(() => {
        console.log('Data:', data);

    }, [data]);

    return (
        <div className="background">
            <div className="container">
                <div className="box">
                    <form action="">
                        <h1> Your Information </h1>
                        {data.length > 0 ? (
                            <>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Name:
                                       <span>{data[0].name}</span>
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Email:
                                      <span>{data[0].email}</span>
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>PhoneNo:
                                        <span>{data[0].phoneno}</span>
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Age
                                       <span>{data[0].age}</span>
                                    </InputLabel>
                                </Stack>
                                <div className="button-container">
                                    <Button variant="contained" onClick={handleEdit}>
                                        Edit
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <p>No information available</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Information;
