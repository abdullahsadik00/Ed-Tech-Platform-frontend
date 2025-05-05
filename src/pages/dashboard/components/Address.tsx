import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';


interface ColorBlockProps{
  label:string,
  lightClass:string,
  darkClass:string,
  textClass?:string,
}
const ColorBlock:React.FC<ColorBlockProps> = ({
  label,
  lightClass,
  darkClass,
  textClass = 'text-foreground ',
}) => (
  <div className="flex flex-col gap-2">
    <div
      className={`${lightClass}  h-20 rounded-lg shadow-md flex items-center justify-center`}
    >
      <span className={textClass}>{label}</span>
    </div>
    <div className="text-xs font-mono">
      <p>Light: {lightClass}</p>
      <p>Dark: {darkClass}</p>
    </div>
  </div>
);

function Address() {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground ">
            Color Theme Guide
          </h1>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Background & Foreground */}
          <ColorBlock
            label="Background"
            lightClass="bg-background"
            darkClass="bg-background-dark"
          />
          <ColorBlock
            label="Foreground"
            lightClass="bg-foreground"
            darkClass="bg-foreground-dark"
          />

          {/* Primary Colors */}
          <ColorBlock
            label="Primary"
            lightClass="bg-primary"
            darkClass="bg-primary-dark"
            textClass="text-white"
          />
          <ColorBlock
            label="Primary Light"
            lightClass="bg-primary-light"
            darkClass="bg-zinc-600"
          />
          <ColorBlock
            label="Primary Lighter"
            lightClass="bg-primary-lighter"
            darkClass="bg-zinc-500"
          />
          <ColorBlock
            label="Primary Lightest"
            lightClass="bg-primary-lightest"
            darkClass="bg-zinc-400"
          />

          {/* Secondary Colors */}
          <ColorBlock
            label="Secondary"
            lightClass="bg-secondary"
            darkClass="bg-secondary-dark"
          />
          <ColorBlock
            label="Secondary Light"
            lightClass="bg-secondary-light"
            darkClass="bg-zinc-700"
          />

          {/* Accent Colors */}
          <ColorBlock
            label="Accent"
            lightClass="bg-accent"
            darkClass="bg-accent-dark"
          />
          <ColorBlock
            label="Accent Light"
            lightClass="bg-accent-light"
            darkClass="bg-zinc-500"
          />
          <ColorBlock
            label="Accent Lighter"
            lightClass="bg-accent-lighter"
            darkClass="bg-zinc-400"
          />

          {/* Muted Colors */}
          <ColorBlock
            label="Muted"
            lightClass="bg-muted"
            darkClass="bg-muted-dark"
          />

          {/* Destructive Colors */}
          <ColorBlock
            label="Destructive"
            lightClass="bg-destructive"
            darkClass="bg-destructive-dark"
            textClass="text-destructive-foreground "
          />

          {/* Border & Input Colors */}
          <ColorBlock
            label="Border"
            lightClass="bg-border"
            darkClass="bg-border-dark"
          />
          <ColorBlock
            label="Input"
            lightClass="bg-input"
            darkClass="bg-input-dark"
          />
          <ColorBlock
            label="Ring"
            lightClass="bg-ring"
            darkClass="bg-ring-dark"
          />
        </div>

        {/* Zinc Scale */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-foreground ">
            Zinc Scale
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
              (weight) => (
                <ColorBlock
                  key={weight}
                  label={`${weight}`}
                  lightClass={`bg-zinc-${weight}`}
                  darkClass={`bg-zinc-${weight}`}
                  textClass={weight < 500 ? 'text-zinc-900' : 'text-zinc-50'}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;