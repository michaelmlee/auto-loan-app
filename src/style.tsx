import {createMuiTheme, Theme} from "@material-ui/core/styles";
const spacing = 8;

const theme: Theme = createMuiTheme({
    spacing: spacing,
    typography: {
        fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(',')
    },
    overrides: {
        MuiButton: {
            root: {
                height: 56,
                margin: spacing,
                fontSize: "large"
            }
        },
        MuiFormControl: {
            root: {
                margin: spacing
            }
        },
        MuiInputBase: {
            root: {
                textAlign: "left"
            }
        }
    }
});

export default theme