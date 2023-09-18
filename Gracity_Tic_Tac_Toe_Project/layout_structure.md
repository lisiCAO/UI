
**Gravity Tic Tac Toe**

### **Layout Structure**:

#### **Header**:
- Display a logo with the title "Gravity Tic Tac Toe".

#### **Game Area**:
- Options to choose the number of players: 2 or 3.
- Symbol selection choices: Triangle, Circle, Square.
- A 4x4 game board grid.
- Once the game initiates, there's a pause button.
- A 30-second countdown timer is activated upon game start.

#### **Footer**:
- A straightforward copyright declaration.

### **Parameters for Figma Design**:

#### 1. **Header**:
- **Height**: 70px.
- **Logo**:
  - **Dimensions**: 40px x 40px.
  - **Position**: 20px margin to the left.
- **Game Title**:
  - **Font Size**: 24px.
  - Displayed boldly and centered.

#### 2. **Game Area**:

- **Width**: 320px.
- **Height**: Estimated around 600px, but can vary based on the components.

---

## **Visual on Page Load**

### **Launcher Module**:

- **Position**: Center of the screen (considering the navbar height).
- **Width**: 400px.
- **Height**: 280px.
- **Background Color**: Light gray (`#E5E5E5`).
- **Border**: 2px solid `#BFBFBF`.
- **Border Radius**: 10px.

**Internal Layout of the Launcher**:
1. **Title**:
    - Text: "Select Game Settings".
    - Font Size: 24px.
    - **Position**: Centered at the top.
    - Margin to next component: 20px.

2. **Number of Players Selector**:
    - Label: "Choose Number of Players".
    - Options: 2 or 3.
    - Display: Radio buttons.
    - **Position**: Centered below the title.
    - Margin to next component: 20px.

3. **Symbol Selector**:
    - Label: "Choose Your Symbol".
    - Symbols: Triangle, Circle, Square.
    - Display: Clickable icons with a highlight on select.
    - **Position**: Centered below the number of players selector.
    - Margin to next component: 20px.

4. **Start Game Button**:
    - Text: "Start Game".
    - **Position**: Centered below the symbol selector.
    - Margin to next component: 20px.

5. **Rankings Button**:
    - Text: "View Rankings".
    - **Position**: To the right of the start game button, aligned horizontally.

---

## **Visual After Game Launch**

### **Game Area**:
- **Position**: Centered in the browser, subtracting the navbar height.
- **Width**: 320px (60*4 + 10*3 for spaces in between).
- **Height**: 320px (60*4 + 10*3 for spaces in between).
- **Background Color**: White (`#FFFFFF`).
- **Border**: 1px solid `#BFBFBF`.

### **Navbar**:
- **Timer**:
    - Displayed as a 30-second countdown.
    - Font Size: 20px.
    - **Position**: Left.

- **Pause Button**:
    - Text: "Pause".
    - **Position**: Center.

- **End Game Button**:
    - Text: "End Game".
    - **Position**: Right.


**Game Controls**:
- Located below the game board.

**Components inside Game Controls**:
- **Pause Button**: Positioned to the left.
- **End Game Button**: Centered.
- **Timer**: Displayed on the right, showing the 30-second countdown in bold.

### **Game Area Aesthetics**:
- Enclose the game area with a border.
- Apply a slight shadow for depth.
- Set the background color as light gray (`#E5E5E5`).
- The primary button color is blue (`#2E5BFF`), with a hover effect of a marginally darker shade.

#### 3. **Footer**:
- **Height**: 50px.
- **Font Size**: 12px.
- The copyright text is centered.

 [Visit Figma](https://www.figma.com/file/lrPh2O2H8pjsAqQJy1AkWK/Untitled?type=design&node-id=0-1&mode=design&t=8hFdyVYUOP2DlZKf-0 "Figma Web Design")