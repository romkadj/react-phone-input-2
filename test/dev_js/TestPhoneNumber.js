import React from 'react';
import PhoneInput from "../../src";
import StateComponent from "./StateComponent";

export const FormPhoneInput = React.forwardRef(
    ({ showCheckMark, onFocus, focused, onChange, onBlur, invalid, country, formatNumber, ...rest }, ref) => {
        return (
            <StateComponent initialState={{value: '1234567', data: {countryCode: 'se'}}}>
                {({state, setState}) => {
                    return (<PhoneInput
                        onlyCountries={['gb', 'es', 'se']}
                        preserveOrder={['onlyCountries']}
                        masks={{ se: '...-... .. ..' }}
                        disableCountryGuess={true}
                        disableCountryCode={true}
                        jumpCursorToEnd={false}
                        value={state.value}
                        country={state.data.countryCode ? state.data.countryCode : 'se'}
                        onChange={(value, data, event, formattedValue) => {
                            setState({value, data, formattedValue});
                        }}
                    />)
                }}
            </StateComponent>
        );
    }
);
