# Pasta de Imagens

## Favicon / Logo

Esta pasta contém as imagens da logo da agência Quebra-Cabeça.

### Para adicionar o favicon (ícone da aba do navegador):

1. **Adicione sua logo nesta pasta** com os seguintes formatos:
   - `favicon.ico` (16x16, 32x32, 48x48 pixels)
   - `logo192.png` (192x192 pixels) - Para Android/Chrome
   - `logo512.png` (512x512 pixels) - Para PWA
   - `apple-touch-icon.png` (180x180 pixels) - Para iOS

2. **Geradores online recomendados:**
   - https://favicon.io/ - Crie favicons a partir de imagens
   - https://realfavicongenerator.net/ - Gerador completo de favicons

3. **Formatos de arquivo:**
   - `.ico` - Formato padrão para navegadores
   - `.png` - Formato para dispositivos móveis
   - `.svg` - Formato vetorial (opcional)

### Onde colocar os arquivos:

```
public/
  └── assets/
      └── images/
          ├── favicon.ico          # Ícone principal (multi-tamanho)
          ├── logo192.png          # Logo para Android/Chrome
          ├── logo512.png          # Logo para PWA
          └── apple-touch-icon.png # Logo para iOS
```

Após adicionar os arquivos, eles serão automaticamente detectados pelo `index.html`.
