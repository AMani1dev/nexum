# InfScrollDa

`InfScrollDa` is a horizontally looping infinite scroll component designed to animate image or content carousels based on vertical scroll direction.

## 🧩 Components
- **LoopingElement**: Handles the animation of one scrolling lane.
- **InfScrollDa**: Composes two lanes with opposite starting positions for a seamless loop effect.

## 📦 Props

### `InfScrollDa`
| Prop        | Type     | Description                                |
|-------------|----------|--------------------------------------------|
| `firstArray`  | `Array`  | Array of content for the first scroll lane |
| `secondArray` | `Array`  | Array of content for the second scroll lane |
| `contentType` | `string` | (Optional) Can be used to pass type info   |

## 🛠️ Usage

```jsx
<InfScrollDa
  firstArray={[{ content: "/img1.webp" }, { content: "/img2.webp" }]}
  secondArray={[{ content: "/img3.webp" }, { content: "/img4.webp" }]}
  contentType="image"
/>
