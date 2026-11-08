# Spanish Voice Coach — rules for every Claude session working on this repo

The owner (Satya) sometimes runs more than one Claude session on this repo. Follow these rules so sessions don't undo each other.

## Requirements are the source of truth
- The requirements live in the Claude doc https://claude.ai/artifact/1s5VancZDfom1NWxkTDBRD and are mirrored in `REQUIREMENTS.md` on `main`.
- Any change to requirements: update the doc AND `REQUIREMENTS.md`, and push to `main` straight away (the owner asked for this to be automatic).
- Before changing requirements or code, pull first and read what is already there; extend it, don't overwrite another session's work.

## Releases: preview first
- App changes go to the `preview` branch only. Test link: `https://raw.githack.com/satyarami/spanish-coach/<commit>/index.html`.
- Nothing reaches `main` (the live site https://satyarami.github.io/spanish-coach/) until the owner tries it and says "release it".
- On release: copy the current root app files to `previous/` (fix its "Use previous version" link to `../`), then merge `preview` into `main`.
- Always `git fetch` and build on top of the latest `origin/preview`; never force-push.
- Bump `APP_VERSION` and add a `CHANGELOG` entry for every build.

## Never lose a learner's progress
- Progress is in localStorage key `svc.state`, shared by every version. Never rename the key or reset progress in an update.
- New fields: add defaults in `DEFAULT()` and handle old data in `migrate()`; bump `SCHEMA` when the shape changes.
- The position is stored by unit id (`posId`, e.g. `l07`). Add new lessons with new ids; don't reuse or renumber ids.
- Phrase progress (`srs`) is keyed `lessonId:index`. Only append phrases to a lesson; don't reorder or delete existing ones.
- Test upgrades with old saved data before asking the owner to release (see `migrate()` and the upgrade scenarios: mid-session user, finished user, unreadable data).

## Feedback
- App feedback arrives as GitHub issues titled `[feedback] …`; the workflow saves them as `feedback/01.md`…`10.md` (latest 10 kept).
