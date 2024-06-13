#version 330
// A fragment shader for rendering a mesh that has a texture, but no lighting.
layout (location=0) out vec4 FragColor;

// Input from vertices: interpolated texture coordinate.
in vec2 TexCoord;

// Uniform from application: the texture sampler.
uniform sampler2D baseTexture;

uniform bool invertColors;

void main() {
    // Sample the texture image at the fragment's texture coordinate.
    vec4 true_color = texture(baseTexture, TexCoord);
    FragColor = vec4(abs(float(invertColors) - true_color.rgb), true_color.a);
}