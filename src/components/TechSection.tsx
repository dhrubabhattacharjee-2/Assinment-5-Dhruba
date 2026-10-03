import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import Stack from "./Stack";
import type { Technology } from "../type/tech";

const TechSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed.`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);

    toast.info("All technologies removed.");
  };

  // Loading
  if (loading) {
    return (
      <section
        id="technologies"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >
        <div className="flex min-h-60 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

            <p className="mt-3 text-sm text-gray-500">
              Loading technologies...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20"
    >

      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Explore the{" "}
          <span className="brand-gradient">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main layout */}
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechCard
              key={technology.id}
              technology={technology}
              onAdd={handleAdd}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
            />
          ))}
        </div>

        {/* Stack */}
        <Stack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default TechSection;