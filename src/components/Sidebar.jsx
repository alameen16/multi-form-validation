import './Sidebar.css';

const steps = [
  { number: 1, label: 'YOUR INFO' },
  { number: 2, label: 'SELECT PLAN' },
  { number: 3, label: 'ADD-ONS' },
  { number: 4, label: 'SUMMARY' },
];

function Sidebar({ currentStep = 1 }) {
  return (
    <div className="sidebar">
      <nav className="sidebar__steps">
        {steps.map(({ number, label }) => {
          const isActive = number === currentStep;
          return (
            <div key={number} className="sidebar__step">
              <div className={`sidebar__circle ${isActive ? 'sidebar__circle--active' : ''}`}>
                {number}
              </div>
              <div className="sidebar__text">
                <span className="sidebar__step-label">STEP {number}</span>
                <span className="sidebar__step-name">{label}</span>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
