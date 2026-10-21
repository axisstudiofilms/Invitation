import { sqliteTable, text, integer, uniqueIndex, index } from 'drizzle-orm/sqlite-core';
export const invitations = sqliteTable('invitations', {
  id:text('id').primaryKey(),ownerId:text('owner_id').notNull(),slug:text('slug'),
  data:text('data').notNull(),publishedData:text('published_data'),revision:integer('revision').notNull().default(1),
  updatedAt:text('updated_at').notNull(),publishedAt:text('published_at'),
}, t=>[uniqueIndex('invitations_slug_unique').on(t.slug),index('invitations_owner_idx').on(t.ownerId)]);
export const uploads = sqliteTable('uploads',{key:text('key').primaryKey(),ownerId:text('owner_id').notNull(),contentType:text('content_type').notNull(),size:integer('size').notNull(),createdAt:text('created_at').notNull()});
export const wishes=sqliteTable('wishes',{id:text('id').primaryKey(),invitationId:text('invitation_id').notNull().references(()=>invitations.id,{onDelete:'cascade'}),name:text('name').notNull(),message:text('message').notNull(),approved:integer('approved').notNull().default(0),createdAt:text('created_at').notNull()},t=>[index('wishes_invitation_created_idx').on(t.invitationId,t.createdAt)]);
