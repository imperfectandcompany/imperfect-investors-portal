import { h } from 'preact';
import { useState } from 'preact/hooks';

interface NodeProps {
  label: string;
  icon: string;
  onToggle: () => void;
}

const Node = ({ label, icon, onToggle }: NodeProps) => (
  <div className="node font-bold clickable" tabIndex={0} onClick={onToggle} onKeyPress={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      onToggle();
      event.preventDefault();
    }
  }} aria-label={`Toggle ${label} branch`}>
    <i className={`${icon} icon`}></i>{label}
  </div>
);

interface BranchProps {
  expanded: boolean;
  children: preact.ComponentChildren;
}

const Branch = ({ expanded, children }: BranchProps) => (
  <div className={`branch ${expanded ? 'expanded' : ''}`}>
    {children}
  </div>
);

const MindMap = () => {
  const [expandedBranches, setExpandedBranches] = useState<Record<string, boolean>>({});

  const toggleBranch = (branchName: string) => {
    setExpandedBranches(prev => ({ ...prev, [branchName]: !prev[branchName] }));
  };

  return (
    <div className="mind-map-container w-full" tabIndex={0}>
      <Node label="Building the Next Social Platform: Postogon" icon="fas fa-globe" onToggle={() => toggleBranch('main')} />
      <Branch expanded={expandedBranches['main']}>
        <Node label="Revolutionizing Social Interaction" icon="fas fa-star" onToggle={() => toggleBranch('interaction')} />
        <Branch expanded={expandedBranches['interaction']}>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-globe icon"></i>Postogon is a social platform that allows users to be themselves and take control of their own feed.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-lock icon"></i>Users can protect their digital footprint online and have full control over what others see.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-fire icon"></i>Postogon aims to revolutionize how people interact with one another.</div>
        </Branch>
        <Node label="Customizing Your Experience" icon="fas fa-mask" onToggle={() => toggleBranch('customizing')} />
        <Branch expanded={expandedBranches['customizing']}>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-users icon"></i>Postogon offers different levels of visibility: public, private, and for people who are close to you.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-paint-brush icon"></i>Users can have multiple versions of themselves on the platform, catering to different audiences and moods.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-link icon"></i>By separating feeds and controlling access, users can communicate authentically with different groups.</div>
        </Branch>
        <Node label="Integrating Platforms and Enhancing Communication" icon="fas fa-link" onToggle={() => toggleBranch('integration')} />
        <Branch expanded={expandedBranches['integration']}>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-music icon"></i>Postogon allows integration with existing platforms like Spotify and other social media networks.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-comments icon"></i>Users can interact socially without having to make posts, fostering constant communication.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-globe icon"></i>This integration opens up new ways for people to connect and share their lives authentically.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-bullhorn icon"></i>Postogon acknowledges and promotes meta communication as a standard communication strategy.</div>
        </Branch>
        <Node label="Meta Communication and its Benefits" icon="fas fa-bullhorn" onToggle={() => toggleBranch('meta')} />
        <Branch expanded={expandedBranches['meta']}>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-music icon"></i>Users can communicate indirectly through actions like music choices, controlling the brand they want to portray.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-lock icon"></i>By sharing limited content with specific groups, users can effectively communicate to the right audience without misunderstandings.</div>
        </Branch>
        <Node label="The Team Behind Postogon" icon="fas fa-users" onToggle={() => toggleBranch('team')} />
        <Branch expanded={expandedBranches['team']}>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-globe icon"></i>Our company has expertise in various fields, including international business, sustainability sciences, and technology.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-star icon"></i>We have the experience to identify and address market needs and turn ideas into reality.</div>
          <div className="node !select-all" tabIndex={0}><i className="fas fa-trophy icon"></i>With a track record of successful online projects, we are confident in Postogon's potential to solve real problems.</div>
        </Branch>
      </Branch>
    </div>
  );
};

export default MindMap;
