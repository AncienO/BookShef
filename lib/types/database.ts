export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      tools: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          url: string;
          description: string | null;
          purpose: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          url: string;
          description?: string | null;
          purpose?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          url?: string;
          description?: string | null;
          purpose?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          colour: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          colour?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          colour?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      tool_categories: {
        Row: {
          tool_id: string;
          category_id: string;
        };
        Insert: {
          tool_id: string;
          category_id: string;
        };
        Update: {
          tool_id?: string;
          category_id?: string;
        };
        Relationships: [];
      };
      toolkits: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      toolkit_tools: {
        Row: {
          toolkit_id: string;
          tool_id: string;
        };
        Insert: {
          toolkit_id: string;
          tool_id: string;
        };
        Update: {
          toolkit_id?: string;
          tool_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "toolkit_tools_toolkit_id_fkey";
            columns: ["toolkit_id"];
            isOneToOne: false;
            referencedRelation: "toolkits";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "toolkit_tools_tool_id_fkey";
            columns: ["tool_id"];
            isOneToOne: false;
            referencedRelation: "tools";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

export type Tool = Database["public"]["Tables"]["tools"]["Row"];
export type ToolInsert = Database["public"]["Tables"]["tools"]["Insert"];
export type ToolUpdate = Database["public"]["Tables"]["tools"]["Update"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type CategoryInsert = Database["public"]["Tables"]["categories"]["Insert"];
export type ToolCategory = Database["public"]["Tables"]["tool_categories"]["Row"];
export type Toolkit = Database["public"]["Tables"]["toolkits"]["Row"];
export type ToolkitInsert = Database["public"]["Tables"]["toolkits"]["Insert"];
export type ToolkitUpdate = Database["public"]["Tables"]["toolkits"]["Update"];
export type ToolkitTool = Database["public"]["Tables"]["toolkit_tools"]["Row"];

