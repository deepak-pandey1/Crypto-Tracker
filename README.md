
![ss](https://github.com/user-attachments/assets/cfdd53f5-074d-49a7-b79d-87894fcc7819)



<h1>Cryptocurrency Tracker</h1>

<p>
  This project is a simple and user-friendly cryptocurrency tracker built with <strong>ReactJS</strong> and managed using <strong>Yarn</strong>. It provides live price updates for various cryptocurrencies like Bitcoin, Ethereum, and more, helping you stay on top of market trends.
</p>

## Project Workflow Diagram
```mermaid
graph TD
    %% Define nodes with shapes
    A([User opens https://cryptostracker.onrender.com/]) --> B([Homepage loads popular cryptocurrencies])
    B --> C{User action}
    
    C -->|Searches or selects a crypto| D([Fetch detailed crypto data via API])
    
    D --> E([Show current price up to 1 year])
    D --> F([Show market cap])
    D --> G([Show 24 hrs price change percentage])
    D --> H([Render price charts line only])
    
    H --> I([User interacts with charts])
    
    I --> J{User explores time ranges}
    J -->|Selects time range| K([Update chart accordingly])
    J -->|Hover over chart| L([Show exact price data point])
    
    K --> M{User action}
    L --> M
    
    M -->|Switch crypto| D
    M -->|End interaction| N([UI updates with animations and responsive design])
    
    N --> O([User navigates away or closes site])
    
    %% Styling nodes
    classDef process fill:#a2d2ff,stroke:#333,stroke-width:2px,color:#000,rounded
    classDef decision fill:#ffafcc,stroke:#333,stroke-width:2px,color:#000,diamond
    
    class A,B,D,E,F,G,H,I,K,L,N,O process
    class C,J,M decision




```

<h2>Features</h2>
<ul>
  <li><strong>Live Price Updates</strong>: Displays real-time cryptocurrency prices fetched from reliable APIs.</li>
  <li><strong>Multiple Cryptocurrencies</strong>: Track popular coins including Bitcoin, Ethereum, and others.</li>
  <li><strong>Responsive Design</strong>: Optimized for both desktop and mobile devices.</li>
  <li><strong>Custom Styling</strong>: Utilizes Styled Components for a modern and maintainable design.</li>
  <li><strong>Magic UI Integration</strong>: Incorporates prebuilt components from Magic UI for a polished user experience.</li>
</ul>

## 🧰 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-%23000000.svg?style=for-the-badge&logo=react&logoColor=white)
![React ChartJS](https://img.shields.io/badge/React_ChartJS-%23FF6384.svg?style=for-the-badge&logo=chart-dot-js&logoColor=white)
![Magic UI](https://img.shields.io/badge/Magic_UI-%23000000.svg?style=for-the-badge&logo=magic&logoColor=white)

</div>

<h2>How to Use</h2>
<ol>
  <li>Clone the repository to your local machine:</li>
  <pre><code>git clone https://github.com/your-username/cryptocurrency-tracker.git</code></pre>
  <li>Navigate to the project directory:</li>
  <pre><code>cd cryptocurrency-tracker</code></pre>
  <li>Install the dependencies:</li>
  <pre><code>yarn install</code></pre>
  <li>Start the development server:</li>
  <pre><code>yarn start</code></pre>
  <li>Open your web browser and go to <code>http://localhost:3000</code> to view the application.</li>
</ol>

<h2>Project Structure</h2>
<pre><code>
.
├── src
│   ├── components      # React components for the cryptocurrency tracker
│   ├── App.js          # Main application file
│   ├── index.js        # Entry point of the application
│   ├── api.js          # API call functions to fetch cryptocurrency data
│   └── styles.js       # Styled Components for custom styling
└── public
    ├── index.html      # Main HTML file
    └── favicon.ico     # Favicon for the app
</code></pre>

<h2>Future Enhancements</h2>
<ul>
  <li>Add detailed analytics and historical charts for cryptocurrency trends.</li>
  <li>Implement a favorites list for quick access to preferred coins.</li>
  <li>Introduce a dark/light theme toggle for a personalized user experience.</li>
  <li>Improve error handling and user notifications for API request issues.</li>
</ul>
