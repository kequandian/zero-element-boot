/**
 * Example usage of the enhanced MultiViewport component with layout specifications
 *
 * This file demonstrates how to use the new layoutSpec prop to define layouts
 * using either the Standard Format or Grid Template Format.
 */

import React from 'react';
import MultiViewport from './index';

// Example 1: Grid Template Format - Simple 2x2 grid
function ExampleGridTemplate() {
  const layoutSpec = {
    id: "quad",
    name: "四宫格布局",
    layout: {
      cells: [["a", "b"], ["c", "d"]],
      gap: 8
    }
  };

  return (
    <MultiViewport layoutSpec={layoutSpec}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FF5733' }}>A</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#33FF57' }}>B</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3357FF' }}>C</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F333FF' }}>D</div>
    </MultiViewport>
  );
}

// Example 2: Grid Template Format - With weights and nested grid
function ExampleNestedGrid() {
  const layoutSpec = {
    id: "meeting_complex",
    name: "会议复杂布局",
    version: 1,
    layout: {
      cells: [
        ["content", "content", "sidebar"],
        ["content", "content", "sidebar"],
        ["toolbar", "toolbar", "toolbar"]
      ],
      weights: [[2, 2, 1], [1, 1, 1]],
      gap: 8,
      padding: 16,
      grid: {
        content: {
          cells: [["speaker", "slides"], ["chat", "slides"]],
          weights: [[3, 1], [1, 3]],
          gap: 6
        },
        toolbar: {
          cells: [["mic", "cam", "share", "quit"]],
          weights: [1, 1, 1, 1],
          gap: 4
        }
      }
    },
    defaultStyle: {
      backgroundColor: "#333333",
      cornerRadius: 16
    },
    cellStyles: {
      sidebar: { backgroundColor: "#1A1A2E" }
    }
  };

  return (
    <MultiViewport layoutSpec={layoutSpec}>
      {/* Content grid children: speaker, chat, slides (spans 2) */}
      <div>Speaker</div>
      <div>Chat</div>
      <div>Slides</div>
      {/* Sidebar */}
      <div>Sidebar</div>
      {/* Toolbar children: mic, cam, share, quit */}
      <div>Mic</div>
      <div>Cam</div>
      <div>Share</div>
      <div>Quit</div>
    </MultiViewport>
  );
}

// Example 3: Standard Format - With weights and min constraints
function ExampleStandardFormat() {
  const layoutSpec = {
    layoutId: "status_panel",
    name: "状态面板",
    version: 2,
    source: "ASSETS",
    params: {
      bounds: { left: 0, top: 0, right: 1920, bottom: 1080 },
      spacing: 8,
      margin: 16,
      rowWeights: [1, 1, 85],
      colWeights: [1],
      rowMinHeights: [200, 150, 40],
      colMinWidths: [600],
      cells: [
        { cellId: "header", row: 0, col: 0 },
        { cellId: "status", row: 1, col: 0 },
        { cellId: "progress", row: 2, col: 0 }
      ]
    },
    defaultStyle: {
      backgroundColor: "#00000000",
      cornerRadius: 8
    }
  };

  return (
    <MultiViewport layoutSpec={layoutSpec}>
      <div>Header</div>
      <div>Status</div>
      <div>Progress Bar</div>
    </MultiViewport>
  );
}

// Example 4: Fixed weights (>= 20 means fixed pixels)
function ExampleFixedWeights() {
  const layoutSpec = {
    id: "fixed_toolbar",
    layout: {
      cells: [["content"], ["toolbar"]],
      weights: [[1, 48]], // 1 = flexible, 48 = 48px fixed
      gap: [4, 0]
    }
  };

  return (
    <MultiViewport layoutSpec={layoutSpec}>
      <div>Content Area (flexible)</div>
      <div>Toolbar (48px fixed)</div>
    </MultiViewport>
  );
}

// Example 5: Backward compatible with existing gridConfig
function ExampleBackwardCompatible() {
  const gridConfig = {
    horizontalWeights: [2, 3, 1],
    verticalWeights: [4, 1],
    gap: '16px',
    cellBorderRadius: '10px'
  };

  return (
    <MultiViewport gridConfig={gridConfig}>
      <div>Cell 1</div>
      <div>Cell 2</div>
      <div>Cell 3</div>
      <div>Cell 4</div>
      <div>Cell 5</div>
      <div>Cell 6</div>
    </MultiViewport>
  );
}

export {
  ExampleGridTemplate,
  ExampleNestedGrid,
  ExampleStandardFormat,
  ExampleFixedWeights,
  ExampleBackwardCompatible
};
