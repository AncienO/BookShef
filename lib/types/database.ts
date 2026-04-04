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
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

export type Tool = Database["public"]["Tables"]["tools"]["Row"];
export type ToolInsert = Database["public"]["Tables"]["tools"]["Insert"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type CategoryInsert = Database["public"]["Tables"]["categories"]["Insert"];
export type ToolCategory = Database["public"]["Tables"]["tool_categories"]["Row"];

