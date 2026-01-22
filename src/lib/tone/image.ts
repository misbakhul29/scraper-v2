export const artSchool = 'create a soft, understated image with an art-school aesthetic. If people are present, preserve their identity while using gentle natural light, muted colors, and a relaxed, slightly awkward pose and place them in a simple, everyday setting such as a studio, classroom, or quiet street. Otherwise, treat the scene or object as the subject or subjects, using gentle light, muted colors, and intimate framing. The mood should feel intimate, youthful, and casually artistic rather than polished or glamorous.';

export const doodle = 'create a naive, childlike doodle with rough, uneven black linework. If people are present, preserve their identity while using exaggerated, awkward proportions, wobbly outlines, and endearingly cute expressions with frantic curls or jagged lines for hair. Otherwise, treat the scene or object as the subject, using simple shapes, unsteady strokes, and a loose, scribbly style that looks hand-drawn without precision. The background should be plain or lightly textured like paper, and the overall aesthetic should feel charmingly imperfect, unrefined, and playfully weird, strictly avoiding crayon textures in favor of pure line art.';

export const popArt = 'create a bold, graphic image in a 1960s comic-book pop-art style using thick black contour lines and flat saturated primary colors. If people are present, preserve their identity while rendering them with expressive, stylized features and dramatic shading, as if captured in a mid-panel moment. Otherwise, treat the scene or object as the subject, using clean lines and dynamic composition. Apply dense halftone dot shading throughout, and ensure the mood feels energetic with vintage print charm, keeping the artwork full-bleed with no borders.';

export const dramatic = 'create a dramatic black-and-white photograph with a moody, cinematic atmosphere using high-contrast lighting. If people are present, preserve their identity while rendering them as appearing wet, as if just caught in the rain, with irregular water droplets and streaks on the face, and damp, slightly clumped hair with loose strands. Otherwise, treat the scene or object as the subject, emphasizing wet textures, deep shadows, and bright highlights to carve out form. The background should be dark and minimal, and the overall mood intense, emotional, and photographic with real rain texture and dramatic tonal depth.';

export const neonPunk = 'create a futuristic cyberpunk aesthetic characterized by high-contrast neon lighting in cyan and magenta tones. If people are present, preserve their identity while outfitting them in tactical tech-wear with glowing accents, placed within a rain-slicked, neon-lit urban environment. Otherwise, treat the scene or object as a high-tech artifact or setting, emphasizing metallic textures and glowing circuitry. The overall mood should be gritty, vibrant, and technologically advanced with a cinematic depth of field.';

export const ghibli = 'create a nostalgic, hand-painted anime style reminiscent of classic Studio Ghibli films. If people are present, preserve their identity while rendering them with gentle cel-shading, expressive but simple line work, and a warm, emotional demeanor. Otherwise, treat the scene or object as the primary focus, integrating it into a lush, detailed background with watercolor textures and fluffy cumulus clouds. The colors should be vibrant yet natural, evoking a sense of wonder, peace, and summer warmth.';

export const corporateFlat = 'create a clean, modern flat vector illustration style commonly used in tech corporate branding. If people are present, preserve their identity while simplifying them into geometric shapes with smooth curves, flat colors, and minimal shading, avoiding realistic textures. Otherwise, treat the scene or object as a stylized icon or diagram using the same flat design principles. Use a bright, harmonious color palette with abstract organic shapes in the background, ensuring the image looks professional, optimistic, and suitable for a business presentation or website.';

export const manga = 'create a classic black-and-white Japanese manga panel aesthetic using traditional ink pen and screentone textures. If people are present, preserve their identity while rendering them with dynamic linework, expressive facial features common in action manga, and dramatic hatching for shadow. Otherwise, treat the scene or object using bold ink outlines and cross-hatching to define form. Incorporate visual elements like speed lines or sound effect text bubbles in the background to make the overall mood feel energetic, gritty, and ready for print.';

export const clay3d = 'create a charming 3D illustration style resembling digital claymation or toy design with soft, rounded edges. If people are present, preserve their identity while simplifying them into friendly, chunky shapes with a tactile, plasticine texture and gentle, diffuse lighting that creates soft shadows. Otherwise, treat the scene or object with the same playful, tactile quality, emphasizing volume over fine detail. The colors should be cheerful and pastel, making the overall mood feel cute, tangible, and playful like a physical diorama.';

export const vintageFilm = 'create a vintage analog photography aesthetic, specifically mimicking 35mm film with natural grain and imperfect color shifts. If people are present, preserve their identity while capturing them with a soft focus, warm, slightly muted color tones, and natural light leaks or lens flares. Otherwise, treat the scene or object with the same nostalgic filter, emphasizing texture and film artifacts. The overall mood should feel candid, nostalgic, and warm, like a rediscovered memory from the 1970s.';

export const ToneImagePrompts = {
  artSchool,
  doodle,
  popArt,
  dramatic,
  neonPunk,
  ghibli,
  corporateFlat,
  manga,
  clay3d,
  vintageFilm
} as const;

export enum ToneImageEnum {
  artSchool = 'artSchool',
  doodle = 'doodle',
  popArt = 'popArt',
  dramatic = 'dramatic',
  neonPunk = 'neonPunk',
  ghibli = 'ghibli',
  corporateFlat = 'corporateFlat',
  manga = 'manga',
  clay3d = 'clay3d',
  vintageFilm = 'vintageFilm'
}

export type ToneImage = keyof typeof ToneImagePrompts;