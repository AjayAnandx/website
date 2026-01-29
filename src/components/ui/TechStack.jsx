import React from 'react';
import LogoLoop from './LogoLoop';
import {
    ReactIcon,
    NextIcon,
    NodeIcon,
    PythonIcon,
    TensorflowIcon,
    PytorchIcon,
    MongoIcon,
    PostgresIcon,
    AwsIcon,
    DockerIcon,
    KubernetesIcon,
    TypescriptIcon,
    GraphqlIcon,
    RedisIcon,
    TailwindIcon
} from './icons';

const TechIcon = ({ icon, name }) => (
    <div className="flex items-center gap-3">
        {icon}
        <span className="text-white font-bold text-2xl">{name}</span>
    </div>
);

const techLogos = [
    { node: <TechIcon icon={<ReactIcon className="w-10 h-10" />} name="React" /> },
    { node: <TechIcon icon={<NextIcon className="w-10 h-10" />} name="Next.js" /> },
    { node: <TechIcon icon={<NodeIcon className="w-10 h-10" />} name="Node.js" /> },
    { node: <TechIcon icon={<PythonIcon className="w-10 h-10" />} name="Python" /> },
    { node: <TechIcon icon={<TensorflowIcon className="w-10 h-10" />} name="TensorFlow" /> },
    { node: <TechIcon icon={<PytorchIcon className="w-10 h-10 text-[#EE4C2C]" />} name="PyTorch" /> },
    { node: <TechIcon icon={<MongoIcon className="w-10 h-10" />} name="MongoDB" /> },
    { node: <TechIcon icon={<PostgresIcon className="w-10 h-10" />} name="PostgreSQL" /> },
    { node: <TechIcon icon={<AwsIcon className="w-10 h-10" />} name="AWS" /> },
    { node: <TechIcon icon={<DockerIcon className="w-10 h-10" />} name="Docker" /> },
    { node: <TechIcon icon={<KubernetesIcon className="w-10 h-10" />} name="Kubernetes" /> },
    { node: <TechIcon icon={<TypescriptIcon className="w-10 h-10" />} name="TypeScript" /> },
    { node: <TechIcon icon={<GraphqlIcon className="w-10 h-10" />} name="GraphQL" /> },
    { node: <TechIcon icon={<RedisIcon className="w-10 h-10" />} name="Redis" /> },
    { node: <TechIcon icon={<TailwindIcon className="w-10 h-10" />} name="Tailwind" /> }
];

const TechStack = () => {
    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* Title Section */}
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Our Tech Stack
                </h2>
            </div>

            {/* Full-Width Logo Loop */}
            <div className="w-full">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    pauseOnHover={true}
                    fadeOut={false}
                    scaleOnHover={false}
                    ariaLabel="Technology stack"
                />
            </div>
        </section>
    );
};

export default TechStack;
