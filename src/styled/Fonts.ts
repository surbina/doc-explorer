import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
      font-family: 'MMedium';
      src: url('/fonts/MatterTRIAL-Medium.woff2') format('woff2'),
          url('/fonts/MatterTRIAL-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'MSQT';
      src: url('/fonts/MatterSQTRIAL-Regular.woff2') format('woff2'),
          url('/fonts/MatterSQTRIAL-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'M';
      src: url('/fonts/MatterTRIAL-Regular.woff2') format('woff2'),
          url('/fonts/MatterTRIAL-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'MSQTSemiBold';
      src: url('/fonts/MatterSQTRIAL-SemiBold.woff2') format('woff2'),
          url('/fonts/MatterSQTRIAL-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'MSemiBold';
      src: url('/fonts/MatterTRIAL-SemiBold.woff2') format('woff2'),
          url('/fonts/MatterTRIAL-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'Myriad';
      src: url('/fonts/MYRIADPRO-REGULAR.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
`;

export default Fonts;
