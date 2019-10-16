import Spaces, { useSpace } from './types/Spaces';
import SpacesImage from './types/SpacesImage';
import SpacesDisclaimer from './types/SpacesDisclaimer';
import SpacesAgreement from './types/SpacesAgreement';
import { sanitizeSpaces } from './types/helpers';

export default Spaces;

export {
    SpacesImage,
    SpacesImage as SpacesLogo,
    SpacesImage as SpacesBillboard,
    SpacesImage as SpacesTile,
    SpacesDisclaimer,
    SpacesAgreement,
    useSpace,
    sanitizeSpaces
};

