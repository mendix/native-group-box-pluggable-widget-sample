import { brand } from "../core/variables";
import shadeblendconvert from "../core/helpers/_functions/shadeblendconvert";

export const com_mendix_widget_native_groupbox_GroupBox = {
    container: {
        borderColor: brand.primary,
    },
    header: {
        backgroundColor: shadeblendconvert(0.4, brand.primary),
    },
    headerContent: {
        color: "#000000",
    },
};

export const groupBoxSuccess = {
    container: {
        borderColor: brand.success,
    },
    header: {
        backgroundColor: shadeblendconvert(0.4, brand.success),
    },
    headerContent: {
        color: "#000000",
    },
};

export const groupBoxWarning = {
    container: {
        borderColor: brand.warning,
    },
    header: {
        backgroundColor: shadeblendconvert(0.4, brand.warning),
    },
    headerContent: {
        color: "#000000",
    },
};

export const groupBoxDanger = {
    container: {
        borderColor: brand.danger,
    },
    header: {
        backgroundColor: shadeblendconvert(0.4, brand.danger),
    },
    headerContent: {
        color: "#000000",
    },
};
