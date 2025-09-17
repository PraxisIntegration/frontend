# Frontend Praxis

A React-based application for Praxis integration that supports both deposit and withdrawal operations.

## Features

- **Deposit Form**: Customer information collection form for deposit operations
- **Withdrawal Process**: Automated withdrawal initiation with redirect handling
- **Theme Support**: Light and dark theme options
- **Iframe Integration**: Designed to work seamlessly within iframes
- **Responsive Design**: Mobile-friendly interface

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
  src="http://localhost:5173?theme=light&intent=deposit&session_id=12345&return_url=https://example.com/return"
  width="100%"
  height="600"
  frameborder="0"
>
</iframe>
```

## Query Parameters

The application supports the following query parameters for configuration:

| Parameter    | Type   | Description                                | Example                                 |
| ------------ | ------ | ------------------------------------------ | --------------------------------------- |
| `theme`      | string | Set the theme (`light` or `dark`)          | `theme=dark`                            |
| `intent`     | string | Operation type (`deposit` or `withdrawal`) | `intent=withdrawal`                     |
| `session_id` | string | Session identifier                         | `session_id=12345`                      |
| `return_url` | string | URL to redirect after completion           | `return_url=https://example.com/return` |

### Example URLs

**Deposit form with light theme:**

```
http://localhost:5173?theme=light&intent=deposit&session_id=12345&return_url=https://example.com/return
```

**Withdrawal process with dark theme:**

```
http://localhost:5173?theme=dark&intent=withdrawal&session_id=67890&return_url=https://example.com/return
```

**Minimal setup:**

```
http://localhost:5173?theme=dark&intent=deposit
```

## Application Flow

### Deposit Flow

1. User accesses the application with `intent=deposit`
2. Customer information form is displayed
3. User fills out required fields (name, email, phone, address, etc.)
4. Form validation is performed
5. Upon successful submission, user is redirected to payment processing

### Withdrawal Flow

1. User accesses the application with `intent=withdrawal`
2. Withdrawal process is automatically initiated
3. User is redirected to withdrawal processing interface
4. No manual form input required

## Technical Details

### Components

- **App.jsx**: Main application component with routing logic
- **InitDepostiForm.jsx**: Customer information collection form
- **InitWithdrawal.jsx**: Automated withdrawal initiation component
- **RedirectIframe.jsx**: Handles redirect functionality

### Key Features

- **Duplicate Call Prevention**: Withdrawal process includes protection against duplicate API calls
- **Form Validation**: Comprehensive validation for all customer data fields
- **Error Handling**: Graceful error handling with user-friendly messages
- **Theme System**: Consistent theming across all components

### Environment Variables

The application requires the following environment variable:

- `VITE_API_URL`: Base URL for the Praxis integration backend

<img width="525" height="734" alt="image" src="https://github.com/user-attachments/assets/25ac9c3a-9b93-46f5-b1b8-1262b1a10348" />
<img width="491" height="742" alt="image" src="https://github.com/user-attachments/assets/b602c7da-285c-415f-a83f-56f601949ae3" />
