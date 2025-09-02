# Frontend Praxis

A React-based customer form application built for Praxis integration.

## Local Development

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`


## Iframe Integration

To embed this application in an iframe, use:

```html
<iframe 
  src="http://localhost:5173?theme=light&currencyFrom=USD&currencyTo=EUR&id=12345&amount=100"
  width="100%" 
  height="600"
  frameborder="0">
</iframe>
```

## Query Parameters

The application supports the following query parameters for pre-configuration:

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `theme` | string | Set the theme (`light` or `dark`) | `theme=dark` |
| `currencyFrom` | string | Source currency code | `currencyFrom=USD` |
| `currencyTo` | string | Target currency code | `currencyTo=EUR` |
| `id` | string | Transaction ID | `id=12345` |
| `amount` | string | Transaction amount | `amount=100` |

### Example URLs

**Light theme:**
```
http://localhost:5173?theme=light&currencyFrom=USD&currencyTo=EUR&id=12345&amount=100
```

**Dark theme with parameters:**
```
http://localhost:5173?theme=dark&currencyFrom=GBP&currencyTo=USD&id=67890&amount=250
```

**Minimal setup:**
```
http://localhost:5173?theme=dark
```
