// Basic HTML escaping to prevent injected markup from user input
const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

const COLORS = {
  headerBg: "#222429",
  accent: "#1c9cea",
  accentDark: "#1773ea",
  pageBg: "#f3f6f6",
  cardBg: "#ffffff",
  textPrimary: "#323232",
  textSecondary: "#646464",
  divider: "#e6e8e8",
  muted: "#a6a6a6",
};

const FONT_STACK = "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif";

export const getContactEmailHtml = ({
  name,
  email,
  message,
}: ContactEmailData): string => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html>
  <head>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap");
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:${COLORS.pageBg}; font-family:${FONT_STACK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.pageBg}; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background-color:${COLORS.cardBg}; border-radius:12px; overflow:hidden;">

            <tr>
              <td style="background-color:${COLORS.headerBg}; padding:24px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:40px; height:40px; background-color:${COLORS.accent}; border-radius:10px; text-align:center; vertical-align:middle;">
                      <span style="font-family:${FONT_STACK}; font-weight:700; font-size:16px; color:#ffffff;">MA</span>
                    </td>
                    <td style="padding-left:12px;">
                      <span style="font-size:14px; font-weight:600; letter-spacing:1px; color:#ffffff;">MUSA ABDULMUQADDAS</span><br/>
                      <span style="font-size:11px; letter-spacing:1px; color:${COLORS.muted};">PORTFOLIO CONTACT</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px; font-size:12px; font-weight:600; letter-spacing:1px; color:${COLORS.accent}; text-transform:uppercase;">New message</p>
                <h1 style="margin:0 0 24px; font-size:20px; font-weight:500; color:${COLORS.textPrimary};">Someone reached out via your portfolio</h1>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                  <tr>
                    <td style="padding:8px 0; border-bottom:1px solid ${COLORS.divider}; font-size:13px; color:${COLORS.textSecondary}; width:80px;">Name</td>
                    <td style="padding:8px 0; border-bottom:1px solid ${COLORS.divider}; font-size:14px; color:${COLORS.textPrimary};">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; border-bottom:1px solid ${COLORS.divider}; font-size:13px; color:${COLORS.textSecondary};">Email</td>
                    <td style="padding:8px 0; border-bottom:1px solid ${COLORS.divider}; font-size:14px;">
                      <a href="mailto:${safeEmail}" style="color:${COLORS.accentDark}; text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 8px; font-size:13px; color:${COLORS.textSecondary};">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:${COLORS.pageBg}; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:${COLORS.textPrimary};">
                      ${safeMessage}
                    </td>
                  </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                  <tr>
                    <td style="background-color:${COLORS.accentDark}; border-radius:8px;">
                      <a href="mailto:${safeEmail}" style="display:inline-block; padding:12px 24px; font-size:13px; font-weight:600; color:#ffffff; text-decoration:none;">Reply to ${safeName.split(" ")[0]}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px; background-color:${COLORS.pageBg}; text-align:center;">
                <p style="margin:0; font-size:11px; color:${COLORS.muted};">Sent from the contact form on your portfolio</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

export const getContactEmailText = ({
  name,
  email,
  message,
}: ContactEmailData): string =>
  `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
