import React from "react";
import Tree from "react-d3-tree";
import { Box, Text } from "@chakra-ui/react";

interface Node {
  name: string;
  children?: Node[];
}

const HierarchyTreeMobile: React.FC<{ data: Node }> = ({ data }) => {
  const renderTree = (node: Node) => {
    return (
      <>
        <Text color={`red`}>{node.name}</Text>
        {node.children && node.children.length > 0 && (
          <Box ml="20px">
            {node.children.map((child) => (
              <React.Fragment key={child.name}>
                {renderTree(child)}
              </React.Fragment>
            ))}
          </Box>
        )}
      </>
    );
  };

  const translate = { x: 550, y: 100 };
  const orientation = "vertical";

  return (
    <Box
      color={`teal.400`}
      mt="20px"
      p="10px"
      border="1px solid #ccc"
      borderRadius="5px"
      width={`100%`}
      height={`300px`}
    >
      <Tree
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        data={data}
        translate={translate}
        orientation={orientation}
      />
    </Box>
  );
};

export default HierarchyTreeMobile;
